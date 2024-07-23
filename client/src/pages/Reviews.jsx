import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import '../css/ReviewStyle.css';

const GET_REVIEWS = gql`
  query GetReviews {
    reviewList {
      id
      name
      rating
      comment
    }
  }
`;

const ADD_REVIEW = gql`
  mutation AddReview($review: ReviewInput!) {
    reviewAdd(review: $review) {
      id
      name
      rating
      comment
    }
  }
`;

function Reviews() {
    const { loading, error, data, refetch } = useQuery(GET_REVIEWS);
    const [addReview] = useMutation(ADD_REVIEW);
    const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });
    const [submissionError, setSubmissionError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview({
            ...newReview,
            [name]: name === "rating" ? parseInt(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addReview({ variables: { review: newReview } });
            console.log('Review added:', data);
            setNewReview({ name: '', rating: 0, comment: '' });
            setSubmissionError(null);
            refetch(); // Refetch reviews after adding a new one
        } catch (error) {
            console.error('Error posting review:', error);
            if (error.networkError && error.networkError.result && error.networkError.result.errors) {
                console.error('Error details:', error.networkError.result.errors); // Log detailed error response
                setSubmissionError(error.networkError.result.errors[0].message);
            } else {
                setSubmissionError(error.message || 'Failed to submit review. Please try again.');
            }
        }
    };

    if (loading) {
        console.log('Loading reviews...');
        return <p>Loading...</p>;
    }
    if (error) {
        console.error('Error loading reviews:', error);
        return <p>Error loading reviews :(</p>;
    }

    console.log('Fetched reviews:', data);

    return (
        <>
            <Header />
            <NavigationBar />
            <main>
                <section className="reviews-section">
                    <div className="review-form-wrapper">
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
                            {submissionError && <p className="error">{submissionError}</p>}
                        </div>
                    </div>
                    <div className="reviews-wrapper">
                        <div className="card">
                            <h2>Customer Reviews</h2>
                            <p>Read what our customers have to say about our spices.</p>
                            {data.reviewList.map((review) => (
                                <div key={review.id} className="review-item">
                                    <h3>{review.name}</h3>
                                    <div className="stars">
                                        {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Reviews;
