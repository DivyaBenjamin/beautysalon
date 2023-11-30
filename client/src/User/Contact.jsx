import React, { useState } from 'react'
import "./Feedback.css"
import axios from 'axios'
function Contact() {

    const [name , setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const AddName = () => {
        const data = {
            name:name,
            phone:phone,
            email:email,
            message:message,
    }

        axios.post('http://127.0.0.1:8000/Userboutique/contactserializer/',data).then((response)=> {
            console.log(response);
        })
    }
return (
    <div>
        <div className="Container">
    <div className="Details">
        <div className="Title">Contact Us</div>
<div className="Field"><label>Name:</label></div>
<div>
    <input type="text" name="name" onChange={(event) => setName(event.target.value)}/>
</div>
<div className="Field"><label>Phone:</label></div>
<div>
    <input type="number" name="phone" onChange={(event) => setPhone(event.target.value)}/>
</div>
<div className="Field"><label>Email:</label></div>
<div>
    <input type="email" name="email" onChange={(event) => setEmail(event.target.value)}/>
</div>
<div className="Field"><label>Message:</label></div>
<div>
    <textarea name="message" id="message" cols="28" rows="6" onChange={(event) => setMessage(event.target.value)}></textarea>
</div><br/><br/>
<div>
    <input type="submit" name="submit" class="submit" value="Submit" onClick={AddName}/>
</div>
</div>
</div>
</div>
  )
}

export default Contact