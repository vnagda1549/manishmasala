import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/ReviewStyle.css';

function Reviews() {
    const [reviews, setReviews] = useState([
        { id: 1, name: "Ajay Kumar", rating: 5, comment: "Excellent spices! The quality is unmatched." },
        { id: 2, name: "Vikas Seth", rating: 4, comment: "Great variety of spices. I found everything I needed." }
    ]);

    const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.rating && newReview.comment) {
            setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
            setNewReview({ name: '', rating: 0, comment: '' });
        }
    };

    return (
        <>
            <Header />
            <NavigationBar />
            <main>
                <section>
                    {/* <img src="/images/review-banner.jpg" alt="Reviews" className="banner-img" /> */}
                    <div className="card">
                        <h2>Customer Reviews</h2>
                        <p>Read what our customers have to say about our spices.</p>
                        {reviews.map((review) => (
                            <div key={review.id} className="review-item">
                                <h3>{review.name}</h3>
                                <div className="stars">
                                    {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        ))}
                    </div>
                    <div className="card review-form">
                        <h2>Post a Review</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value={newReview.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <select id="rating" name="rating" value={newReview.rating} onChange={handleChange} required>
                                    <option value="0">Select Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Comment</label>
                                <textarea id="comment" name="comment" value={newReview.comment} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Reviews;
