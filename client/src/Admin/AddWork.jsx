import React from 'react'
import "./Addwork.css"
const AddWork = () => {
  return (
    <div>
    <div className='Container'>
        <h1 className='Form-title'>Work Gallery</h1>
        <form action="#" method='post' encType='multipart/form-data'>
            <div className='Main-user-info'>
                <div className='User-input-box'>
                    <label htmlFor="Rate">Caption</label>
                    <input type="text" id='caption' name='caption' placeholder='Enter rate'/>
                </div>
                <div className='User-input-box'>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name='image' placeholder='Upload proof'/>
                </div>
                <div className='form-submit-btn'>
                    <input type="submit" value="Register" />
                </div>
            </div>
        </form>
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