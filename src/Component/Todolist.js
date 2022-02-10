import './Todolist.css'
import React from 'react'
// import CheckIcon from '@material-ui/icons/Check'
// import EditIcon from '@material-ui/icons/Edit'
// import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
function Todolist(props) {
    const todolist = props.todolist.map((task,index) => {
        const taskComplete = task => {
            axios.put(`http://localhost:27017/api/tasks/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                isComplete : !task.isComplete
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
            axios.delete(`http://localhost:27017/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        return <li key = {index}>
            <div style = {{display : 'flex'}}>
               <botton className = {task.isComplete ? 'isComplete' : 'checkicon'}/>
               <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
                   taskComplete(task)
               }}>{task.todo}</p>
            </div>
            <div>
                <button className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}>edit</button>
                <button className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}>delete</button>
            </div>
        </li>
    })
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist