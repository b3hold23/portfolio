import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div style={pageStyle}>
            <div style={contentStyle}>
                <h1>Contact Me:</h1>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={inputGroupStyle}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, height: '100px' }}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
}

const pageStyle = {
    backgroundColor: '#8AB0AB',
    minHeight: '76vh', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px',
};

const contentStyle = {
    textAlign: 'center', 
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto', 
    padding: '20px',
    backgroundColor: '#f9f9f9', 
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#23061E',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};
