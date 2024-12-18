
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Home.css";
import { Autoplay } from "swiper/modules";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {

    const services = [
        { id: 1, name: 'Accounting', type: "accounting", description: 'We provide cost-effective and qualitative Financial Accounting Services to Corporate, firms as well as individuals. We provide accurate and timely services full range of accounting, book writing services, quarterly updates and financial statement preparation services. Some of the services offered by us include:' },
        { id: 2, name: 'Auditing & Assurance', type: "auditing", description: 'We offer our auditing services to the traders and industrialist of all size and nature. We strictly adhere to the audit norms to execute the audit work of our clients. We study the working systems, nature and volume of business and advise suitable changes and make valuable suggestions to promote efficiency and achieve better results at the same time.' },
        { id: 3, name: 'Income Tax', type: "incometex", description: 'We provide Tax assistance, Direct Tax Consultancy, Tax Compliances and Tax Representation services. We advise our clients in effective identification and implementation of tax planning opportunities under the Income-tax law for the establishment and subsequent profitable conduct of business by the Indian companies in different sectors, so as to reduce their income-tax liability. Some of the major tax assistance services available for the clients are:' },
        { id: 4, name: 'Corporate Matters', type: "corporatematters", description: 'We provides consultation services to clients on matters related to the company law by consulting the individuals and groups from the very beginning like procedures related to formation and fulfilling mandatory obligations during operation of the company. Our services include:' },
        { id: 5, name: 'Financing Services', type: "financingservices", description: 'For any business to be successful, it should have adequate supply of finances. This is especially true in case of growing countries like India. Businesses that are well nourished economically operate efficiently and they are the ones that take advantage of the market during opportune moments. Therefore in order to support client’s business for their working capital needs, we remain involved at every step of loaning process and provide our best services so that our clients get their needed finance easily.' },
        { id: 6, name: 'INDIRECT TAX / GST', type: "indirecttex", description: 'Indirect taxes apply to goods and services, with consumers bearing the cost. GST is a unified tax that replaced multiple indirect taxes like VAT and excise. It operates through various rates (5%, 12%, 18%, 28%) and allows input tax credits to businesses. GST simplifies compliance, enhances transparency, and reduces tax evasion. It also fosters economic growth by unifying the national market.' },
        { id: 7, name: 'Startup/New Business', type: "startup", description: "India is second most developing country in startups and therefore this sector is growing at its fastest pace. Government’s “Startup India & Standup India' Scheme fuels this pace. We at Rajan & Co. help startup many ways in getting the maximum benefits of government scheme and services. Following are few of them:" },
        { id: 8, name: 'Registration & Return Services', type: "registrationreturnservices", description: 'We provide services of registration under various revenue laws as well as intellectual property laws and other business laws, some of them are as follows' },
        { id: 9, name: 'Business Consultancy Services', type: "businessconsultancyservices", description: 'Profit maximization is the objective of any business. We, at Rajan & Co., provide services to help the business owners to run their business smoothly and efficiently resulting in maximum profits. These services are structured to suit an individual client’s needs and requirements. The services can be categorized as follows:' },
        { id: 10, name: 'NGO/Society/Trust', type: "ngosocietytrust", description: 'We provide range of services starting from incorporation or registration of NGO/SOCIETY/TRUST, changing trustees or members, getting the government aids for various projects and closing down the NGO/SOCIETY/TRUST. In a nutshell we provide service from inception to end in relation to NGO/SOCIETY/TRUST.' },
    ];

    function getServiceLink(service) {
        if (service.type === "accounting") return `/accounting/${service.id}`;
        if (service.type === "auditing") return `/auditing/${service.id}`;
        if (service.type === "incometex") return `/incometex/${service.id}`;
        if (service.type === "corporatematters") return `/corporatematters/${service.id}`;
        if (service.type === "financingservices") return `/financingservices/${service.id}`;
        if (service.type === "indirecttex") return `/indirecttex/${service.id}`;
        if (service.type === "startup") return `/startup/${service.id}`;
        if (service.type === "registrationreturnservices") return `/registrationreturnservices/${service.id}`;
        if (service.type === "businessconsultancyservices") return `/businessconsultancyservices/${service.id}`;
        if (service.type === "ngosocietytrust") return `/ngosocietytrust/${service.id}`;
    }


    return (
        <div className="mainDiv">
            <Swiper
                className="swipe"
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}>
                <SwiperSlide>
                    <img className="images" src={pic1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="images" src={pic2} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="images" src={pic3} alt="Slide 3" />
                </SwiperSlide>
            </Swiper>
            {/* Services */}
            <div className="servicesBox">
                <div className="servicesContainer">
                    {services.map((service) => (
                        <div key={service.id} className="serviceCard">
                            <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to={getServiceLink(service)}>{service.name}</NavLink>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
