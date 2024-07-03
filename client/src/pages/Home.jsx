import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../css/HomeStyle.css'; // Ensure this path is correct for your CSS

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <section>
                    <img src="/images/banner.png" alt="Indian Spices" width="100%" />
                    <div className="card">
                        <h2>Our Spices</h2>
                        <p>Discover a variety of authentic Indian spices that bring flavor and aroma to your dishes.</p>
                    </div>
                    <div className="spice-images">
                        <img src="/images/masala1.jpg" alt="Spice 1" />
                        <img src="/images/masala2.jpg" alt="Spice 2" />
                        <img src="/images/masala3.jpg" alt="Spice 3" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
