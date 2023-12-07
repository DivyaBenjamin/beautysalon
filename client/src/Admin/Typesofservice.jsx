import React, { useState } from "react";
import "./Staff.css";
import axios from 'axios'
function Typesofservice() {

    const [service, setService] = useState('')

    const AddServices = () => {
        const data = { 
            servicestypes:service
        }

        console.log(service);
        axios.post('http://127.0.0.1:8000/adminboutique/serviceserializer/',data).then((response) => {
            console.log(response);
        })
    }
  return (
    <div>
      <div className="Container">
        <h1 className="Form-title">Types of Services</h1>
        {/* <form action="#" method="post" enctype="multipart/form-data"> */}
          <div className="Main-user-info">
            <div className="User-input-box">
              <label for="FullName">Types of services</label>
              <input
                type="text"
                id="services"
                name="services"
                placeholder="Enter services"
                onChange={(event) => setService(event.target.value)}
              />
            </div>
          </div>
          <div className="Form-submit-btn">
            <input type="submit" value="Register" onClick={AddServices} />
          </div>
        {/* </form> */}
      </div>
      <table className="Content-table">
        <tr>
          <th>#</th>
          <th>Types of Services</th>
          <th>Action</th>
        </tr>
      </table>
    </div>
  );
}

export default Typesofservice;