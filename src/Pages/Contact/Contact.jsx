import React, {useState} from "react";
import './Contact.css'

export const Contact = () => {
    const [data, setData] = useState({name: "", email: "", phone: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return(
        <form methods = 'post' onSubmit = {handleSubmit}>
            <h1>Contact <span>Here</span></h1>
            <input type = "text" name = "name" id = "" onChange = {handleChange} value = {data.name} placeholder = 'Enter Name' />
            <input type = "email" name = "email" id = "" onChange = {handleChange} value = {data.email} placeholder = 'example@gmail.com'  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" /> 
            <input type = "phone" name = "phone" id = "" onChange = {handleChange} value = {data.phone} placeholder = '000-000-0000' />
            <textarea name = "message" id = "" cols = "30" onChange = {handleChange} value = {data.message} rows = "10" placeholder = "Type Here" />
            <button type = 'Submit'>Send</button>
        </form>
    );
}