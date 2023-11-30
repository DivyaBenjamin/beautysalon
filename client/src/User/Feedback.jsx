import React, { useState } from 'react'
import "./Feedback.css"
import axios from 'axios'
function Feedback() {

    const [feedback, setFeedback] = useState('')

    const AddFeedback = () => {
        const data = {
            message:feedback
        }

        axios.post('http://127.0.0.1:8000/Userboutique/feedbackserializer/',data).then((response)=> {
            console.log(response);
        })
    }
  return (
    <div><div className="Container">
    <div className="Details">
        <div className="Title">Feedback</div>
<div className="Field"><label>Message:</label></div>
<div>
    <textarea name="message" id="message" cols="28" rows="6" onChange={(event) => setFeedback(event.target.value)}></textarea>
</div><br/><br/>
<div>
    <input type="submit" name="submit" class="submit" value="Submit" onClick={AddFeedback}/>
</div>
</div>
</div></div>
  )
}

export default Feedback