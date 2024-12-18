<<<<<<< HEAD
import React from 'react'

const RegistrationReturnServices = () => {
  return (
    <div>
      <h1>RegistrationReturnServices</h1>
    </div>
  )
}

export default RegistrationReturnServices
=======
import React from "react";
import image from "../assets/returnServices.jpg";
import Contact from "../pages/Contact";
import "./RegistrationReturnServices.css";

const RegistrationReturnServices = () => {
  return (
    <>
      <div className="registrationReturnMAinBox">
        <h1>Registration/License & Return Services</h1>
        <p>Home / Services / Registration/License & Return Services</p>
        <div className="registrationReturnMainBoxChilde_left">
          <img src={image} alt="image not found" />
          <p>
            We provide services of registration under various revenue laws as
            well as intellectual property laws and other business laws, some of
            them are as follows –
          </p>
          <p>
            <span>*</span> Registration or incorporation of Companies & its
            annual return filing
          </p>
          <p>
            <span>*</span> Registration under UPVAT (TIN)or Central Sales tax
            (Now GST) and return filing under VAT/GST
          </p>
          <p>
            <span>*</span> Registration under Service Tax/Excise/Customs and
            return filing under these laws
          </p>
          <p>
            <span>*</span> Registration of Trademarks, Patent, Copyrights or
            other intellectual property rights
          </p>
          <p>
            <span>*</span> Registration or Incorporation of Society
            /trust/NGO/Co-operative Society Registration under labour laws like
            ESI/PF/Gratuity and return filing under these laws Drug and Food
            License, ISO Certification etc.
          </p>
        </div>
        <div className="registrationReturnMainBoxChilde_right">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default RegistrationReturnServices;
>>>>>>> 99f49cc (uploads project)
