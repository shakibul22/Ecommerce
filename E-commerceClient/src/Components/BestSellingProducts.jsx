import React from "react";

const BestSellingProducts = () => {
  const products = [
    {
      category: "Indoor",
      name: "Peace Lily",
      price: "$36.00",
      imgSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      category: "Outdoor",
      name: "Monstera",
      price: "$45.00",
      imgSrc: "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
      bgColor: "bg-teal-500",
      textColor: "text-teal-500"
    },
    {
      category: "Outdoor",
      name: "Oak Tree",
      price: "$68.50",
      imgSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
      bgColor: "bg-purple-500",
      textColor: "text-purple-500"
    },
    // Add more products here if needed
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-4 container mx-auto  py-5">
    <div className=" w-full lg:w-[35%] space-y-4 px-3 lg:px-0">
      <h2 className="text-[#8c53fa] font-semibold">Discover Quality</h2>
      <h1 className="text-xl lg:text-2xl font-bold">Best Selling Plants</h1>
      <p className="">
        Easiest way to healthy life by buying your favorite plants
      </p>

      <a href="/featuredProducts">
        <button
          aria-label="See More"
          className="mt-4 bg-[#c1dcdc]  px-5 py-2 text-sm lg:text-lg rounded-xl hover:bg-[#c1dcdc]:outline-none focus:ring-2 focus:ring-[#c1dcdc] focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          See More
        </button>
      </a>
    </div>
    <div className="p-1 flex flex-wrap items-center justify-center">
      {products.map((product, index) => (
        <div key={index} className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-lg`}>
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2
              }}
            ></div>
            <img
              className="relative w-40"
              src={product.imgSrc}
              alt={product.name}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.name}</span>
              <span className={`block bg-white rounded-full ${product.textColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}>
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BestSellingProducts;
