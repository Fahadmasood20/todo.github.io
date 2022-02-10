import React, { useState } from "react"
// import "./Registration.css"
import axios from "axios"
// import { useNavigate } from "react-router-dom";

const Register= () => {

    // const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "",
       
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        debugger
        const { name} = user
        if( name ){
            axios.post("http://localhost:27017/api/tasks", user)
            .then( res => {
                alert(res.data.message)
                // navigate("/")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <div className="button" onClick={Register} >Register</div>
            
          
        </div>
    )
}

export default Register;