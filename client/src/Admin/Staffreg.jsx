import React, { useState } from "react";
import "./Staff.css"
import axios from 'axios'
function Staffreg() {

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [img, setImg] = useState('')
  const [proof, setProof] = useState('') 
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('') 
  const [dateofjoining, setDateofjoining] = useState('')

  const handleImageChange = (e) => {
        const img = e.target.files[0];
        setImg(img)
       
      };
  const AddStaff = () => {
    const frm = new FormData();
    frm.append("name",fullname);
    frm.append("username",username);
    frm.append("email",email);
    frm.append("phonenumber",phonenumber);
    frm.append("image",img);
    frm.append("proof",proof);
    frm.append("password",password);
    frm.append("gender",gender);
    frm.append("doj",dateofjoining);

      axios.post('http://127.0.0.1:8000/adminboutique/workserializer/',frm).then((response) => {
          console.log(response.data);
      })
  }
  return (
    <div>
        <div className="Container">
        <h1 className="Form-title">StaffRegistration</h1>
        <form action="#" method="post" enctype="multipart/form-data">
          <div class="Main-user-info">
            <div class="User-input-box">
              <label for="FullName">Full Name</label>
              <input type="text"
                      id="fullName"
                      name="fullname"
                      placeholder="Enter Full Name" onChange={(event) => setFullname(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="Username">Username</label>
              <input type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="Email">Email</label>
              <input type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="PhoneNumber">Phone Number</label>
              <input type="text"
                      id="phoneNumber"
                      name="phonenumber"
                      placeholder="Enter Phone Number" onChange={(event) => setPhonenumber(event.target.value)}/>
            </div>
            <div className="User-input-box">
                <label for="PhoneNumber">Image</label>
                <input type="file"
                        id="img"
                        name="img"
                        placeholder="Upload Photo" onChange={(event) => setImg(event.target.value)}/>
              </div>
              <div className="User-input-box">
                <label for="PhoneNumber">Proof</label>
                <input type="file"
                        id="proof"
                        name="proof"
                        placeholder="Upload Proof" onChange={(event) => setProof(event.target.value)}/>
              </div>
            <div className="User-input-box">
              <label for="Password">Password</label>
              <input type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="User-input-box">
              <label for="ConfirmPassword">Confirm Password</label>
              <input type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"/>
            </div>
            <div className="Gender-details-box">
                <span className="Gender-title">Gender</span>
                <div className="Gender-category">
                  <input type="radio" name="gender" id="male" onChange={(event) => setGender(event.target.value)}/>
                  <label for="Male">Male</label>
                  <input type="radio" name="gender" id="female" onChange={(event) => setGender(event.target.value)}/>
                  <label for="Female">Female</label>
                  <input type="radio" name="gender" id="other" onChange={(event) => setGender(event.target.value)}/>
                  <label for="Other">Other</label>
                </div>
            </div>
                <div className="User-input-box">
                    <label for="PhoneNumber">Date of joining</label>
                    <input type="date"
                            id="doj"
                            name="dateofjoining"
                            placeholder="Enter Joining date" onChange={(event) => setDateofjoining(event.target.value)}/>
                </div>
          </div>
          <div className="Form-submit-btn">
            <input type="submit" value="Register" onClick={AddStaff}/>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Staffreg