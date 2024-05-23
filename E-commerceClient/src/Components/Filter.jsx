
const Filter= ({


  activeBrand,
  setActiveBrand,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  activeRating,
  setActiveRating,

  allBrands,
}) => {
  const ratings = [
    { id: 1, name: "⭐", value: 1 },
    { id: 2, name: "⭐⭐", value: 2 },
    { id: 3, name: "⭐⭐⭐", value: 3 },
    { id: 4, name: "⭐⭐⭐⭐", value: 4 },
    { id: 5, name: "⭐⭐⭐⭐⭐", value: 5 },
  ];


  // Function to handle price range selection
  const handleMinPriceChange = (event) => {
    const value = parseInt(event.target.value);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxPrice(value);
  };
  const handleRatingSelection = (ratingValue) => {
    if (activeRating === ratingValue) {
      setActiveRating(null); // Deselect if already active
    } else {
      setActiveRating(ratingValue); // Select if not active
    }
  };
  const handleBrandClick = (brand) => {
    setActiveBrand(activeBrand === brand ? null : brand);
  };

  console.log(allBrands);
  return (
    <div className=" flex flex-col gap-5 w-[250px] lg:w-[250px] px-2  py-2">
      <div className="flex flex-col p-4 border-2 border-purple-400 rounded-xl">
        <h6 className="text-md lg:text-lg mb-6 font-semibold">Price Range</h6>
        <div className="mb-4 border-b-2 pb-8">
          <label className="block mb-1">
            Min Price: <span>{minPrice}</span>
          </label>
          {/* Min price input */}
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice || ""}
            onChange={handleMinPriceChange} // Change from onClick to onChange
          />
        </div>
        <div className="mb-4  pb-8">
          <label className="block mb-1">
            Max Price: <span>{maxPrice}</span>
          </label>
          {/* Max price input */}
          <input
            type="range"
            min="1000"
            max="100000"
            value={maxPrice || ""}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
   

      <div className="flex flex-col p-4 border-2 border-purple-400 rounded-xl">
        <h6 className="text-md lg:text-lg mb-6 font-semibold">Choose Rating</h6>
        <ul className="flex flex-col">
          {/* Map ratings to radio buttons */}
          {ratings?.map((rating, index) => (
            <div key={index} className="flex flex-col justify-start">
              <div className="flex flex-row gap-2 justify-start items-center w-full lg:w-[25vh]">
                <input
                  type="radio"
                  readOnly
                  checked={rating.value === activeRating}
                  onClick={() => handleRatingSelection(rating.value)}
                />
                {rating.name}
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex flex-col p-4 border-2 border-purple-400 rounded-xl">
        <h6 className="text-md lg:text-lg mb-6 font-semibold">Choose Brand</h6>
        <div className="flex flex-col  items-start gap-2">
          {allBrands?.map((brand) => (
            <div key={brand} className="flex flex-row items-center gap-2">
              <input
                type="radio"
                className={` rounded-full mr-2 ${
                  activeBrand === brand ? "bg-blue-500" : ""
                }`}
                style={{ backgroundColor: brand }}
                onClick={() => handleBrandClick(brand)}
              />
              <p>{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;