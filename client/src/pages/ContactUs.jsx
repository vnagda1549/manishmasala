import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/ContactStyle.css'; 

const ContactUs = () => {
    return (
        <>
            <Header />
            <NavigationBar />
            <main>
                <section>
                    {/* <img src="/images/contact-banner.jpg" alt="Contact Us" width="100%" /> */}
                    <div className="card">
                        <h2>Contact Us</h2>
                        <p>We would love to hear from you. Please reach out to us using the information below or fill out the contact form.</p>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Address</h3>
                            <p>123 Spice Street, Flavor Town, Food Country, 45678</p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p>+123-456-7890</p>
                        </div>
                        <div className="contact-item">
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
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
