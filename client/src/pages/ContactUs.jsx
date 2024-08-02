import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/ContactStyle.css';

function ContactUs() {
    return (
        <>
            <NavigationBar />
            <Header />

            <main>
                <section className="contact-section">
                    <div className="contact-container">
                        <h2>Contact Us</h2>
                        <p>We would love to hear from you. Please reach out to us using the information below or fill out the contact form.</p>
                        <div className="contact-details">
                            <div className="details-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Address</h3>
                                <p>Unit - E9/36, Bhumi World Industrial Park, Near, Mumbai - Nashik Expy, opposite Tata Amantran, Pimplas, Bhiwandi, Maharashtra 421302, India</p>
                            </div>
                            <div className="details-item">
                                <i className="fas fa-phone-alt"></i>
                                <h3>Phone</h3>
                                <p>+91 72087 40874</p>
                            </div>
                            <div className="details-item">
                                <i className="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>info@manishmasala.com</p>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe
                                title="store-location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.682944920681!2d73.06790437489137!3d19.26789929265826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd78caf6392d%3A0x60b2ea060ee4333a!2sManish%20Masala%20Food%20Products!5e0!3m2!1sen!2sin!4v1690061050458!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0, width: '100%', height: '300px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
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
                                <button className="button" type="submit">Submit</button>
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
