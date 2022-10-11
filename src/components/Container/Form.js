// import React from 'react'
import { useState } from "react";
import "./Form.css";


// const Form = () => {



function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
<>


<div className = "block">

<form onSubmit={handleSubmit}>



<div className = "form">

<div className="main">

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label"> firstName:

            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">lastName:


            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Education:

            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Email:


            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Phone:


            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label" >Experinece:


            </label>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Address:


            </label>
          </div>
</div>



<div className = "boxes">
  <div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="First Name" inputstyle="box" labelstyle="floating" placeholder="Enter your First Name" 
        type="name"
        name="name"
        value={inputs.name || ""}
        onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Last Name" inputstyle="box" labelstyle="floating" placeholder="Enter your Last Name" 
        type="text"
        name="lastName"
        value={inputs.lastName || ""}
        onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Education" inputstyle="box" labelstyle="floating" placeholder="Education" 
         type="text"
         name="education"
         value={inputs.education || ""}
         onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Email" inputstyle="box" labelstyle="floating" placeholder="Enter your Email" 
        type="email"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="PhoneNumber" inputstyle="box" labelstyle="floating" placeholder="Enter your Phone Number" 
        type="number"
        name="phone"
        value={inputs.phone || ""}
        onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Experiance" inputstyle="box" labelstyle="floating" placeholder="Your Experiance?"
        type="text"
        name="experience"
        value={inputs.experience || ""}
        onChange={handleChange}
        />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Address" inputstyle="box" labelstyle="floating" placeholder="Enter your Address" 
         type="text"
         name="address"
         value={inputs.address || ""}
         onChange={handleChange}
        />
    </div>
  </div>
  <div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
        <div className="mbsc-button-group-block">
            <button color="success" type = "submit" > Submit </button>
        </div>
    </div>
  </div>

</div>

</div>



    
</form>
  
</div>



</>
    
  );
};

export default Form;