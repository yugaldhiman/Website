import React from "react";
import image from "../assets/income_tex.jpg";
import Contact from "../pages/Contact";
import "./IncomeTex.css";

const IncomeTex = () => {
    return (
        <>
            <div className="incomeTexMAinBox">
                <h1>Income Tax</h1>
                <p>Home / Services / Income Tax</p>
                <div className="incomeTexMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        We provide Tax assistance, Direct Tax Consultancy, Tax Compliances
                        and Tax Representation services. We advise our clients in effective
                        identification and implementation of tax planning opportunities
                        under the Income-tax law for the establishment and subsequent
                        profitable conduct of business by the Indian companies in different
                        sectors, so as to reduce their income-tax liability. Some of the
                        major tax assistance services available for the clients are:
                    </p>
                    <p>
                        <span>*</span> Filing of Income Tax Returns
                    </p>
                    <p>
                        <span>*</span> Bulk Filing of Salaried Returns
                    </p>
                    <p>
                        <span>*</span> E-Filing of TDS Returns
                    </p>
                    <p>
                        <span>*</span> Transfer Pricing
                    </p>
                    <p>
                        <span>*</span> Certification required under various section of
                        Income Tax Act 1961
                    </p>
                    <p>
                        <span>*</span> Tax planning and consultancy services
                    </p>
                    <p>
                        <span>*</span> Representation in Assessment and Appeals
                    </p>
                </div>
                <div className="incomeTexMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default IncomeTex;
