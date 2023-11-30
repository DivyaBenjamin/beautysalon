import React from 'react'
import "./Staff.css"
function Staffreg() {

    
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
                      name="fullName"
                      placeholder="Enter Full Name" value="{{data.name}}"/>
            </div>
            <div className="User-input-box">
              <label for="Username">Username</label>
              <input type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username" value="{{data.username}}"/>
            </div>
            <div className="User-input-box">
              <label for="Email">Email</label>
              <input type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email" value="{{data.email}}"/>
            </div>
            <div className="User-input-box">
              <label for="PhoneNumber">Phone Number</label>
              <input type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Phone Number" value="{{data.phone}}"/>
            </div>
            <div className="User-input-box">
                <label for="PhoneNumber">Image</label>
                <input type="file"
                        id="img"
                        name="img"
                        placeholder="Upload Photo" value="{{data.image}}"/>
              </div>
              <div className="User-input-box">
                <label for="PhoneNumber">Proof</label>
                <input type="file"
                        id="proof"
                        name="proof"
                        placeholder="Upload Proof" value="{{data.proof}}"/>
              </div>
            <div className="User-input-box">
              <label for="Password">Password</label>
              <input type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password" value="{{data.password}}"/>
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
                  <input type="radio" name="gender" id="male"/>
                  <label for="Male">Male</label>
                  <input type="radio" name="gender" id="female"/>
                  <label for="Female">Female</label>
                  <input type="radio" name="gender" id="other"/>
                  <label for="Other">Other</label>
                </div>
            </div>
                <div className="User-input-box">
                    <label for="PhoneNumber">Date of joining</label>
                    <input type="date"
                            id="doj"
                            name="dateofjoining"
                            placeholder="Enter Joining date" value="{{data.doj}}"/>
                </div>
          </div>
          <div className="Form-submit-btn">
            <input type="submit" value="Register"/>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Staffreg