import React from 'react';

function BodyPage() {
    return (
        <main>
            <section>
                <img src="/images/banner.jpg" alt="Indian Spices" width="100%" />
                <div class="card">
                    <h2>Our Spices</h2>
                    <p>Discover a variety of authentic Indian spices that bring flavor and aroma to your dishes.</p>
                </div>
                <div className="spice-images">
                    <img src="images/masala1.jpg" alt="Spice 1" />
                    <img src="images/masala2.jpg" alt="Spice 2" />
                    <img src="images/masala3.jpg" alt="Spice 3" />
                </div>
            </section>
        </main>
    );
}

export default BodyPage;
