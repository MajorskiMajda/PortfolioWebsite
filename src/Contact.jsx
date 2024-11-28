import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...Please wait'); 


        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,  
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  
            e.target,                                  
            process.env.REACT_APP_EMAILJS_USER_ID       
        )
            .then(
                (result) => {
                    setStatus('Thank you for your message, your email was sent successfully!');
                    console.log(result.text);
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    }); 
                },
                (error) => {
                    setStatus('Oops... Failed to send message.');
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-container" id="contact" >
            <div className="contact-form">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        autocomplete="off"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autocomplete="off"
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        autocomplete="off"
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>

                {status && (
                    <p className={status.includes('Sending...Please wait') ? 'sending-message' : (status.includes('successfully') ? 'success-message' : 'error-message')}>
                        {status}
                    </p>
                )}
            </div>

            <div className="contact-image">
                <img src="https://i.ibb.co/j3m68Sn/pugs.png" alt="Contact Image" />
            </div>
        </div>
    );

}
