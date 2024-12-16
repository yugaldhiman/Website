import React from "react";
import image from "../assets/auditing.jpg";
import Contact from "../pages/Contact";
import "./Auditing.css";
function Auditing() {
    return (
        <>
            <div className="auditingMAinBox">
                <h1>Auditing & Assurance</h1>
                <p>Home / Services / Auditing & Assurance</p>
                <div className="auditingMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        We offer our auditing services to the traders and industrialist of
                        all size and nature. We strictly adhere to the audit norms to
                        execute the audit work of our clients. We study the working systems,
                        nature and volume of business and advise suitable changes and make
                        valuable suggestions to promote efficiency and achieve better
                        results at the same time.
                    </p>
                    <p>
                        We make it a point that the auditing work is undertaken efficiently
                        so that it does not raise superfluous queries and unnecessarily
                        trouble the clients. We try to complete the audit work in the least
                        possible time and minimal botheration to our patrons. Our Auditing
                        services include:-
                    </p>
                    <p> <span>*</span> Financial statement audit</p>
                    <p> <span>*</span> Regulatory compliance & reporting</p>
                    <p> <span>*</span> Internal audit</p>
                    <p> <span>*</span> Statutory Audit</p>
                    <p> <span>*</span> Stock Audit</p>
                    <p> <span>*</span> Audit under various revenue laws like Income Tax Audit u/s 44AB etc.</p>
                </div>
                <div className="auditingMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Auditing;
