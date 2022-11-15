import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const EmailSubmit = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const data=useRef()

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        
        var objValues=JSON.parse(localStorage.getItem('objValues') || "[]")
        var objValue={
            email:email
        }

        if(regEx.test(email)){
            objValues.push(objValue)
            localStorage.setItem('objValues', JSON.stringify(objValues))
            setMessage("Thank You! E-mail has been submitted.")
        }else if(!regEx.test(email)&& email !== ""){
            setMessage("Please enter a valid e-mail address !")
        }else{
            setMessage("")
        }
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }
 
    return (
        <div className="container-email">
            <div className="email">
                <p className="judul-email">Submit Your E-Mail to Get Notification When There's New Blog Post !</p>
                <div>   
                    <input ref={data} type="mail" placeholder="Enter your email here .. " value={email} onChange={handleOnChange} />
                    <button className="btn btn-outline-light rounded-2 float-end" onClick={emailValidation}>Submit</button>
                </div>
                
            </div>
            <p className="message">{message}</p>
        </div>
    )
}

export default EmailSubmit