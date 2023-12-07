import React, { useState } from "react";
import "./Addwork.css"
import axios from 'axios'
function AddWork() {
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState([])

    const handleImageChange = (e) => {
        const img = e.target.files[0];
        setImage(img)
       
      };
    const AddGalary = () => {
        const frm = new FormData();
        frm.append("caption",caption);
        frm.append("image",image); 

        axios.post('http://127.0.0.1:8000/adminboutique/workserializer/',frm).then((response) => {
            console.log(response.data);
        })
    }
  return (
    <div>
    <div className='Container'>
        <h1 className='Form-title'>Work Gallery</h1>
            <div className='Main-user-info'>
                <div className='User-input-box'>
                    <label htmlFor="Rate">Caption</label>
                    <input type="text" id='caption' name='caption' placeholder='Enter rate' onChange={(event) => setCaption(event.target.value)}/>
                </div>
                <div className='User-input-box'>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name='image' placeholder='Upload proof' onChange={handleImageChange}/>
                </div>
                <div className='form-submit-btn'>
                    <input type="submit" value="Register" onClick={AddGalary}/>
                </div>
            </div>
    </div>
    <table class="Content-table">
    <tr>
        <th>#</th>
        <th>Caption</th>
        <th>Image</th>
        <th>Action</th>
    </tr>
    </table>
   </div> 
    
  )
}

export default AddWork