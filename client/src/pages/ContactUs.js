// src/ContactUs.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/ContactStyle.css'; 

function ContactUs() {
    return (
        <>
            <Header />
            <NavigationBar />
            <main>
    <section className="contact-section">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We would love to hear from you. Please reach out to us using the information below or fill out the contact form.</p>
            <div className="contact-details">
    <div className="details-item">
        <i className="fas fa-map-marker-alt"></i>
        <h3>Address</h3>
        <p>123 Spice Street, Flavor Town, Food Country, 45678</p>
    </div>
    <div className="details-item">
        <i className="fas fa-phone-alt"></i>
        <h3>Phone</h3>
        <p>+123-456-7890</p>
    </div>
    <div className="details-item">
        <i className="fas fa-envelope"></i>
        <h3>Email</h3>
        <p>info@manishmasala.com</p>
    </div>
</div>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button style={{backgroundColor:'#ff5722'}} type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
</main>

            <Footer />
        </>
    );
}

export default ContactUs;