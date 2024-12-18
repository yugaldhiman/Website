<<<<<<< HEAD
import React from 'react'

const FinancingServices = () => {
    return (
        <div>
            <h1>FinancingServices</h1>
        </div>
    )
}

export default FinancingServices
=======
import React from "react";
import image from "../assets/financing.jpg";
import Contact from "../pages/Contact";
import "./FinancingServices.css";

const FinancingServices = () => {
    return (
        <>
            <div className="financingServicesMAinBox">
                <h1>Financing Services</h1>
                <p>Home / Services / Financing Services</p>
                <div className="financingServicesMainBoxChilde_left">
                    <img src={image} alt="image not found" />
                    <p>
                        For any business to be successful, it should have adequate supply of
                        finances. This is especially true in case of growing countries like
                        India. Businesses that are well nourished economically operate
                        efficiently and they are the ones that take advantage of the market
                        during opportune moments. Therefore in order to support client’s
                        business for their working capital needs, we remain involved at
                        every step of loaning process and provide our best services so that
                        our clients get their needed finance easily.
                    </p>
                    <p>
                        At the same time we at ARPIT GUPTA & CO. support the clients need of
                        long term finance in order to expand their business. We also provide
                        the services of obtaining government grants from government
                        authorities as well as various private agencies. This includes:
                    </p>
                    <p>
                        <span>*</span> Startup Funding Private
                    </p>
                    <p>
                        <span>*</span> Equity Funding
                    </p>
                    <p>
                        <span>*</span> Funding through IPO/FPO and listing on Stock
                        exchanges
                    </p>
                    <p>
                        <span>*</span> Debt Funding
                    </p>
                    <p>
                        <span>*</span> Consortium lending through various banks
                    </p>
                </div>
                <div className="financingServicesMainBoxChilde_right">
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default FinancingServices;
>>>>>>> 99f49cc (uploads project)
