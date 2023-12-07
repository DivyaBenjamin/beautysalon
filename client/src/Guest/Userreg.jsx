import React, { useState } from 'react'
import './Reg.css';
import axios from 'axios';
function Userreg() {

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('') 
  
  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setImage(img)
   
  };
    const AddUser = () => {
        const frm = new FormData();
        frm.append("name",fullname);
        frm.append("username",username); 
        frm.append("email",email);
        frm.append("phone",phoneNumber);
        frm.append("password",password);
        frm.append("gender",gender);
        frm.append("image",image);  
        
        axios.post('http://127.0.0.1:8000/userserializer/',frm).then((response) => {
            console.log(response.data);
        })
    }
  return (
    <div>
        <div className="Container">
        <h1 className="Form-title">UserRegistration</h1>
          <div className="Main-user-info">
            <div className="User-input-box">
              <label for="fullName">Full Name</label>
              <input type="text"
                      id="fullName"
                      name="fullname"
                      placeholder="Enter Full Name" onChange={(event) => setFullname(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="username">Username</label>
              <input type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="email">Email</label>
              <input type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="phoneNumber">Phone Number</label>
              <input type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Phone Number" onChange={(event) => setPhonenumber(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="password">Password</label>
              <input type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="user-input-box">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="Gender-details-box">
            <span class="gender-title">Gender</span>
            <div class="gender-category">
              <input type="radio" name="gender" id="male" onChange={(event) => setGender(event.target.value)}/>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" onChange={(event) => setGender(event.target.value)}/>
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" onChange={(event) => setGender(event.target.value)}/>
              <label for="other">Other</label>
            </div>
          </div>
          <div className="User-input-box">
            <label for="password">Image</label>
            <input type="file"
                    id="image"
                    name="image"
                    placeholder="" onChange={handleImageChange}/>
          </div>
          <div className="Form-submit-btn">
            <input type="submit" value="Register" onClick={AddUser}/>
          </div>
    </div>
    </div>
  )
}

export default Userreg