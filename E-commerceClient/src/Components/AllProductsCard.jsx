import { PiHeartBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const AllProductCard = ({
  id,
  discount,
  price,
  discountType,
  name,
  rating,
  image,
  discountedPrice,
}) => {
  const color = "";
  const size = "";

  const StarIcon = ({ rating, index, empty }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={empty ? "gray" : rating >= index ? "orange" : "gray"}
      className="w-4 mr-.5 lg:mr-1 text-yellow-500 dark:text-yellow-400 bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  );

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span className="mask mask-star-2 text-xs lg:text-lg" key={i}>
          <StarIcon rating={rating} index={i} />
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span
          className="mask mask-star-2 text-xs lg:text-lg"
          key={fullStars + 1}
        >
          <StarIcon rating={rating} index={fullStars + 1} />
        </span>
      );
    }

    for (let i = fullStars + (hasHalfStar ? 2 : 1); i <= 5; i++) {
      stars.push(
        <div className="mask mask-star-2 text-xs lg:text-lg" key={i}>
          <StarIcon rating={rating} index={i} empty />
        </div>
      );
    }

    return stars;
  };

  return (
    <div className="shadow-xl dark:border dark:shadow-2xl rounded-md relative overflow-hidden">
      <div className="flex flex-row justify-between w-full absolute items-center p-3">
        <div className="w-auto px-2">
          {discountedPrice > 0 && (
            <div className="text-white rounded-bl-lg rounded-tr-lg bg-[#46cdd6] px-2">
              {discount}
              {discountType}
            </div>
          )}
        </div>
        <PiHeartBold className="text-2xl" />
      </div>
      <Link to={`/products/${id}`}>
        <div className="flex-shrink-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-38 h-44 md:w-56 md:h-60 lg:h-80 lg:w-full object-scale-up rounded-t-xl"
          />
        </div>
      </Link>
      <div className="px-2 lg:px-4 py-2">
        <Link to={`/products/${id}`}>
          <p className="text-sm h-[25px] overflow-hidden lg:text-lg font-bold block capitalize">
            {name}
          </p>
        </Link>
        <div className="flex gap-1 items-center">
          <div className="text-sm lg:text-md font-semibold cursor-auto ">
            <div className="text-xs md:text-sm lg:text-lg">
              {discountedPrice > 0 ? (
                <div className="flex flex-row items-center gap-2">
                  <span>${discountedPrice.toFixed(0)}</span>
                  <span className="text-red-500 line-through">
                    ${price.toFixed(0)}
                  </span>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-2">
                  <span>${price.toFixed(0)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-1">
          <div className="text-xs lg:text-lg flex items-center gap-0 lg:gap-1">
            {renderRatingStars(rating)}
            <span className="text-xs lg:text-lg">{rating}</span>
          </div>
          <div className="rounded-full p-1.5 lg:px-2 cursor-pointer">
            <img
              src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1712387387/wired-outline-146-trolley_slztct.gif"
              alt="Add to Cart"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
