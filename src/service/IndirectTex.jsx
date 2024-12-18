<<<<<<< HEAD
import React from 'react'

const IndirectTex = () => {
    return (
        <div>
            <h1>IndirectTex</h1>
        </div>
    )
}

export default IndirectTex
=======
import React from "react";
import image from "../assets/indirectTex.jpg";
import Contact from "../pages/Contact";
import "./IndirectTex.css";

const IndirectTex = () => {
    return (
        <>
            <div className="indirectTexMAinBox">
                <h1>Financing Services</h1>
                <p>Home / Services / Financing Services</p>
                <div className="indirectTexMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>The indirect Tax services include the following:</p>
                    <p>
                        <span>*</span> Indirect Tax Advisory | Advising Companies, Firms and
                        Individuals on Sales Tax, VAT, Service Tax, and Excise Duty Matters;
                        and Planning thereof.
                    </p>
                    <p>
                        <span>*</span> Indirect Tax Management | Attending to registration,
                        renewals, periodic returns and compliances
                    </p>
                    <p>
                        <span>*</span> Appeals | Representational Services
                    </p>
                    <p>
                        <span>*</span> Smooth transition to GST Regime from old taxation
                        system
                    </p>
                    <p>
                        <span>*</span> GST Compliances
                    </p>
                </div>
                <div className="indirectTexMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default IndirectTex;
>>>>>>> 99f49cc (uploads project)
