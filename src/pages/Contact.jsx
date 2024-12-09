// import React, { useState } from "react";
// import './Contact.css'

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Thank you for contacting us, ${formData.name}!`);
//         setFormData({ name: "", email: "", message: "" });
//     };

//     return (
//         <>
//             <div className="contact-container">
//                 <h2>Contact Us</h2>
//                 <form className="contact-form" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Your Name"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Your Email"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message">Message:</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Your Message"
//                             rows="5"
//                             required
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="submit-button">Send Message</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Contact


// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         from_name: '',
//         from_email: '',
//         message: '',
//     });
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         // Validation: Check if any field is empty
//         if (!formData.from_name || !formData.from_email || !formData.message) {
//             setError('All fields are required.');
//             return;
//         }

//         setError(''); // Clear any previous error

//         emailjs
//             .send('service_won6pdb', 'template_ohfycje', formData, '6fg5QRKF3RZm0oh-b')
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                     // Reset the form after successful submission
//                     setFormData({ from_name: '', from_email: '', message: '' });
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 }
//             );
//     };

//     return (
//         <form onSubmit={sendEmail}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <label>Name</label>
//             <input
//                 type="text"
//                 name="from_name"
//                 value={formData.from_name}
//                 onChange={handleChange}
//             />
//             <label>Email</label>
//             <input
//                 type="email"
//                 name="from_email"
//                 value={formData.from_email}
//                 onChange={handleChange}
//             />
//             <label>Message</label>
//             <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//             />
//             <input type="submit" value="Send" />
//         </form>
//     );
// };

// export default Contact;






import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.from_email || !formData.message) {
            setError('All fields are required.');
            return;
        }

        setError('');

        emailjs
            .send('service_won6pdb', 'template_ohfycje', formData, '6fg5QRKF3RZm0oh-b')
            .then(
                () => {
                    // console.log('SUCCESS!');
                    setPopupMessage('Message sent successfully!');
                    setPopupVisible(true);
                    setFormData({ from_name: '', from_email: '', message: '' });
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    setPopupMessage('Failed to send the message. Please try again.');
                    setPopupVisible(true);
                }
            );
    };

    const closePopup = () => {
        setPopupVisible(false);
        setPopupMessage('');
    };

    return (
        <div className='formmainDiv'>
            <form className='form' onSubmit={sendEmail}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <label>Name</label>
                <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                />
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <input type="submit" value="Send" />
            </form>

            {isPopupVisible && (
                <div
                    className='mainDivChilde1'
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'white',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                    }}
                >
                    <p>{popupMessage}</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
            {isPopupVisible && (
                <div
                    className='mainDivChilde2'
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                    }}
                    onClick={closePopup}
                ></div>
            )}
        </div>
    );
};

export default Contact;
