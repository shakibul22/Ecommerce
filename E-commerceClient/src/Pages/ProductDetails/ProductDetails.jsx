import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-server-sandy.vercel.app/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product details", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const submitReview = async () => {
    if (!user) {
      alert("You must be logged in to submit a review.");
      return;
    }

    try {
      const response = await fetch(
        `https://e-commerce-server-sandy.vercel.app/products/${id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user.displayName,
            rating: newReview.rating,
            text: newReview.text,
          }),
        }
      );

      const updatedProduct = await response.json();
      setProduct(updatedProduct);
      setNewReview({ rating: 0, text: "" });
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.images[0]}
                alt={product.name}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-sm mb-4">{product.description}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold">Price:</span>
                <span>${product.price}</span>
              </div>
              <div>
                <span className="font-bold">Availability:</span>
                <span>
                  {product.availability ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">User Reviews</h3>
          {product?.reviews?.length > 0 ? (
            product?.reviews.map((review) => (
              <div key={review?._id} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{review?.username}</span>
                  <span className="text-sm text-gray-600">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">{review?.rating} stars</span>
                </div>
                <p className="text-sm mt-2">{review?.text}</p>
                <div className="flex mt-2">
                  <button className="mr-4 text-blue-500">Like</button>
                  <button className="mr-4 text-blue-500">Dislike</button>
                  <button className="text-blue-500">Reply</button>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review this product!</p>
          )}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>
          {user ? (
            <div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Rating</label>
                <select
                  name="rating"
                  value={newReview.rating}
                  onChange={handleReviewChange}
                  className="w-full border rounded p-2"
                >
                  <option value="0">Select rating</option>
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5">5 stars</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold">Comment</label>
                <textarea
                  name="text"
                  value={newReview.text}
                  onChange={handleReviewChange}
                  className="w-full border rounded p-2"
                  rows="4"
                ></textarea>
              </div>
              <button
                onClick={submitReview}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </div>
          ) : (
            <p>You must be logged in to write a review.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
