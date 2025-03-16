import { useState } from "react";
import Rating from "react-rating-stars-component";
import { useParams } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { postReview } from "../../../redux/reducers/Review/review.action";

// component
import CustomStarRating from "../../Star/CustomStar.component";

export default function ReviewModal({ isOpen, setIsOpen }) {
    const [reviewData, setReviewData] = useState({
        subject: "",
        reviewText: "",
        isRestaurantReview: false,
        isFoodReview: false,
        rating: 0,
    });
    const [rating, setRating] = useState(0);
    const { id } = useParams();

    const dispatch = useDispatch();
    const submit = () => {
        dispatch(postReview({ ...reviewData, restaurant: id }));
        setReviewData({
            subject: "",
            reviewText: "",
            isRestaurantReview: false,
            isFoodReview: false,
            rating: 0,
        });
        closeModal();
    };

    const handleChange = (e) => {
        setReviewData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleRating = (rating) => {
        setReviewData((prev) => ({ ...prev, rating }));
    };

    const toggleDining = () => {
        setReviewData((prev) => ({
            ...prev,
            isRestaurantReview: !prev.isRestaurantReview,
            isFoodReview: false,
        }));
    };

    const toggleDelivery = () => {
        setReviewData((prev) => ({
            ...prev,
            isRestaurantReview: false,
            isFoodReview: !prev.isFoodReview,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the logic to handle the review submission here
        console.log("Review submitted", reviewData);

        // Reset form after submission
        setReviewData({
            subject: "",
            reviewText: "",
            isRestaurantReview: false,
            isFoodReview: false,
            rating: 0,
        });


        closeModal(); // Close the modal after submission
    };

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center bg-gray-500/75 flex items-center justify-center">
                        {/* Modal Content */}
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative z-20">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Add Review</h3>

                            <div className="mt-2 flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="review"
                                            id="dining"
                                            checked={reviewData.isRestaurantReview}
                                            onChange={toggleDining}
                                        />
                                        <label htmlFor="dining">Dining</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="review"
                                            id="delivery"
                                            checked={reviewData.isFoodReview}
                                            onChange={toggleDelivery}
                                        />
                                        <label htmlFor="delivery">Delivery</label>
                                    </div>
                                </div>
                                {/* <Rating
                                    count={5}
                                    size={24}
                                    value={reviewData.rating}
                                    onChange={handleRating}
                                /> */}
                                <CustomStarRating rating={reviewData.rating > 0 ? reviewData.rating : rating} setRating={handleRating} />


                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="w-full flex flex-col gap-2">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="amazing food"
                                            value={reviewData.subject}
                                            onChange={handleChange}
                                            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-CraveEats-400"
                                            required
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <label htmlFor="reviewText">Review Text</label>
                                        <textarea
                                            id="reviewText"
                                            rows="5"
                                            placeholder="Type your review ..."
                                            value={reviewData.reviewText}
                                            onChange={handleChange}
                                            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-CraveEats-400"
                                            required
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                            onClick={submit} >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Close Modal on Background Click */}
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-10"
                        onClick={closeModal}
                    ></div>
                </div>
            )}
        </>
    );
}
