import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/AboutStyle.css';

const AboutUs = () => {
    return (
        <>
            <Header />
            <NavigationBar />
            <main className="about-main">
                <section className="about-section">
                    <div className="about-card">
                        <h2>About Us</h2>
                        <p>Welcome to ManishMasala, your number one source for all types of spices. We're dedicated to giving you the very best of spices, with a focus on quality, customer service, and uniqueness.</p>
                        <p>Founded in 2023, ManishMasala has come a long way from its beginnings. When we first started out, our passion for providing the best spices drove us to start our own business.</p>
                        <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                        <p>Sincerely, <br /> Manish, Founder</p>
                    </div>
                    <div className="about-details-grid">
                        <div className="detail-item">
                            <h3>Our Mission</h3>
                            <p>Our mission is to provide high-quality spices that enhance the flavor of your food. We believe that spices are essential to cooking, and our goal is to make them accessible to everyone.</p>
                        </div>
                        <div className="detail-item">
                            <h3>Our Vision</h3>
                            <p>We envision a world where everyone has access to the best spices. Our vision is to become a global leader in the spice industry by providing high-quality products and excellent customer service.</p>
                        </div>
                        <div className="detail-item">
                            <h3>Our Products</h3>
                            <p>At ManishMasala, we offer a wide variety of spices including Turmeric, Cumin, Coriander, Chili Powder, Garam Masala, and Black Pepper. Our spices are carefully selected to ensure the highest quality and flavor.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
