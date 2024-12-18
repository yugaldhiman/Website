<<<<<<< HEAD
import React from 'react'

const BusinessConsultancyServices = () => {
    return (
        <div>
            <h1>BusinessConsultancyServices</h1>
        </div>
    )
}

export default BusinessConsultancyServices
=======
import React from "react";
import image from "../assets/businessConsultance.jpg";
import Contact from "../pages/Contact";
import "./BusinessConsultancyServices.css";

const BusinessConsultancyServices = () => {
    return (
        <>
            <div className="BusinessConsultancyMAinBox">
                <h1>Business Consultancy Services</h1>
                <p>Home / Services / Business Consultancy Services</p>
                <div className="BusinessConsultancyMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        Profit maximization is the objective of any business. We, at Arpit
                        Gupta & Co., provide services to help the business owners to run
                        their business smoothly and efficiently resulting in maximum
                        profits. These services are structured to suit an individual
                        client’s needs and requirements. The services can be categorized as
                        follows:-
                    </p>
                    <p>
                        <span>*</span> Business Planning
                    </p>
                    <p>
                        <span>*</span> Market Research & Feasibility Study
                    </p>
                    <p>
                        <span>*</span> Profit Maximization
                    </p>
                    <p>
                        <span>*</span> Working Capital Optimization
                    </p>
                    <p>
                        <span>*</span> MIS & Decision Support System
                    </p>
                    <p>
                        <span>*</span> Preparing Budgets and Projections
                    </p>
                </div>
                <div className="BusinessConsultancyMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default BusinessConsultancyServices;
>>>>>>> 99f49cc (uploads project)
