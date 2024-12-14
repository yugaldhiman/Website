import React from "react";
import image from "../assets/accounting.jpg";
import Contact from '../pages/Contact'
import './Accounting.css'
function Accounting() {
    return (
        <>
            <div className="accountingMAinBox">
                <h1>Accounting</h1>
                <p>Home / Services / Accounting</p>
                <div className="accountingMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        We provide cost-effective and qualitative Financial Accounting
                        Services to Corporate, firms as well as individuals. We provide
                        accurate and timely services full range of accounting, book writing
                        services, quarterly updates and financial statement preparation
                        services. Some of the services offered by us include:
                    </p>
                    <p> Book-Writing</p>
                    <p>Payroll Reconciliation</p>
                    <p>Checking Account Reconciliation</p>
                    <p>Accounts Receivable/Payable Reconciliations</p>
                    <p>Preparation of Management Accounts and Statutory Accounts.</p>
                </div>
                <div className="accountingMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Accounting;
