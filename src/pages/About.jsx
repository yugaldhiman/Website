<<<<<<< HEAD
import React from "react";
import image from "../assets/rajanpic.png";
import './About.css';

const aboutContent = {
    leftBox: {
        image: image,
        name: "Rajan Dhiman",
        designation: "- Advocate -",
        description: [
            "Rajan Dhiman is a distinguished Advocate with a wealth of experience in finance, taxation, and legal advisory services. Known for his meticulous approach, he has built a reputation for providing comprehensive solutions tailored to the needs of businesses and individuals alike. His dual expertise enables him to bridge the gap between financial and legal intricacies, offering unparalleled guidance in compliance, audits, and litigation matters.",
            "With a passion for excellence, Rajan has successfully represented clients in high-stakes cases and has played a pivotal role in optimizing their financial strategies. He is also committed to educating clients on complex regulatory changes, ensuring their interests are protected. His integrity, dedication, and client-centric approach make him a trusted professional in navigating financial and legal challenges.",
            "Rajan Dhiman continues to inspire trust and confidence among his clients with his unwavering commitment to professionalism and quality service."
        ]
    },
    rightBox: {
        vision: {
            title: "Our Vision",
            points: [
                "To be significantly present in all the regions of the country as a national, professional Firm of repute, addressing primarily the mid-sized and large Corporate segments and all those entrepreneurial individuals who create and drive the economic growth of the country irrespective of size.",
                "To provide balanced and rounded threefold services in the related areas of professional practice: audit, tax, and consulting, at all practice locations.",
                "To be a competitive & dynamic leader in the areas of operation, so that the best opportunity to progress and grow at all levels is available to all associated with the Firm, thereby directly serving the best interests of the Firm’s clients; and to develop and implement strategies towards that end."
            ]
        },
        values: {
            title: "Our Values",
            points: [
                "To uphold high standards of honesty and integrity that makes the individual and collective actions of those who work for the Firm fruitful to our client.",
                "To place the interest of individuals and that of clients ahead of that of the Firm whenever the need arises to differentiate between these interests.",
                "To strive always to improve the quality of services, driven by the larger need, internal and external, to improve the quality of life and the standard of living for society as a whole."
            ]
        }
    }
};

const About = () => {
    return (
        <>
            <div className="aboutMainBox">
                <div className="aboutLeftBox">
                    <img src={aboutContent.leftBox.image} alt="image not found" />
                    <h5>{aboutContent.leftBox.name}</h5>
                    <p className="education-p">{aboutContent.leftBox.designation}</p>
                    <div className="aboutLeftTextBox">
                        {aboutContent.leftBox.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="aboutRightBox">
                    <div className="abiutRightBox-1">
                        <h2>{aboutContent.rightBox.vision.title}</h2>
                        {aboutContent.rightBox.vision.points.map((point, index) => (
                            <p key={index}><span>*</span> {point}</p>
                        ))}
                    </div>
                    <div className="abiutRightBox-2">
                        <h2>{aboutContent.rightBox.values.title}</h2>
                        {aboutContent.rightBox.values.points.map((point, index) => (
                            <p key={index}><span>*</span> {point}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
=======
import React from "react";
import image from "../assets/rajanpic.png";
import './About.css';

const aboutContent = {
    leftBox: {
        image: image,
        name: "Rajan Dhiman",
        designation: "- Advocate -",
        description: [
            "Rajan Dhiman is a distinguished Advocate with a wealth of experience in finance, taxation, and legal advisory services. Known for his meticulous approach, he has built a reputation for providing comprehensive solutions tailored to the needs of businesses and individuals alike. His dual expertise enables him to bridge the gap between financial and legal intricacies, offering unparalleled guidance in compliance, audits, and litigation matters.",
            "With a passion for excellence, Rajan has successfully represented clients in high-stakes cases and has played a pivotal role in optimizing their financial strategies. He is also committed to educating clients on complex regulatory changes, ensuring their interests are protected. His integrity, dedication, and client-centric approach make him a trusted professional in navigating financial and legal challenges.",
            "Rajan Dhiman continues to inspire trust and confidence among his clients with his unwavering commitment to professionalism and quality service."
        ]
    },
    rightBox: {
        vision: {
            title: "Our Vision",
            points: [
                "To be significantly present in all the regions of the country as a national, professional Firm of repute, addressing primarily the mid-sized and large Corporate segments and all those entrepreneurial individuals who create and drive the economic growth of the country irrespective of size.",
                "To provide balanced and rounded threefold services in the related areas of professional practice: audit, tax, and consulting, at all practice locations.",
                "To be a competitive & dynamic leader in the areas of operation, so that the best opportunity to progress and grow at all levels is available to all associated with the Firm, thereby directly serving the best interests of the Firm’s clients; and to develop and implement strategies towards that end."
            ]
        },
        values: {
            title: "Our Values",
            points: [
                "To uphold high standards of honesty and integrity that makes the individual and collective actions of those who work for the Firm fruitful to our client.",
                "To place the interest of individuals and that of clients ahead of that of the Firm whenever the need arises to differentiate between these interests.",
                "To strive always to improve the quality of services, driven by the larger need, internal and external, to improve the quality of life and the standard of living for society as a whole."
            ]
        }
    }
};

const About = () => {
    return (
        <>
            <div className="aboutMainBox">
                <div className="aboutLeftBox">
                    <img src={aboutContent.leftBox.image} alt="image not found" />
                    <h5>{aboutContent.leftBox.name}</h5>
                    <p className="education-p">{aboutContent.leftBox.designation}</p>
                    <div className="aboutLeftTextBox">
                        {aboutContent.leftBox.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="aboutRightBox">
                    <div className="abiutRightBox-1">
                        <h2>{aboutContent.rightBox.vision.title}</h2>
                        {aboutContent.rightBox.vision.points.map((point, index) => (
                            <p key={index}><span>*</span> {point}</p>
                        ))}
                    </div>
                    <div className="abiutRightBox-2">
                        <h2>{aboutContent.rightBox.values.title}</h2>
                        {aboutContent.rightBox.values.points.map((point, index) => (
                            <p key={index}><span>*</span> {point}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
>>>>>>> 99f49cc (uploads project)
