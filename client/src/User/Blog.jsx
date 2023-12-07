import React, { useState } from "react";
import "./Feedback.css";
import axios from 'axios'
function Blog() {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const AddMessage = () => {
        const data = { 
            subject:subject,
            message:message
        }
console.log(data);
        axios.post('http://127.0.0.1:8000/Userboutique/blogserializer/',data).then((response) => {
            console.log(response.data);
        })
    }
  return (
    <div>
        <div className="Container">
            <div className="Details">
                <div className="Title">Blog</div>
        <div className="Field"><label>Subject:</label></div>
        <div>
            <input type="text" name="subject" onChange={(event) => setSubject(event.target.value)}/>
        </div>
        <div className="Field"><label>Message:</label></div>
        <div>
            <textarea name="message" id="message" cols="28" rows="6" onChange={(event) => setMessage(event.target.value)}></textarea>
        </div><br/><br/>
        <div>
            <input type="submit" name="submit" class="submit" value="Submit" onClick={AddMessage}/>
        </div>
    </div>
</div>
    </div>
  );
}

export default Blog;