import React from "react";

const categories = [
  {
    title: "Natural Plants",
    imgSrc:
      "https://res.cloudinary.com/dgohi0iqm/image/upload/v1716358638/Frame_39_abzixn.png",
    description: "",
    buttonLabel: "",
  },
  {
    title: "Plant Accessories",
    imgSrc:
      "https://res.cloudinary.com/dgohi0iqm/image/upload/v1716358642/Frame_38_tg7bw4.png",
    description: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonLabel: "Explore",
  },
  {
    title: "Artificial Plants",
    imgSrc:
      "https://res.cloudinary.com/dgohi0iqm/image/upload/v1716358669/Frame_37_ecufom.png",
    description: "",
    buttonLabel: "",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#C1DCDC] py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Categories</h2>
        <p className="text-gray-600">Find what you are looking for</p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="max-w-xs bg-white m-4 p-4 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="rounded-lg mb-4 w-full h-60 object-cover"
              src={category.imgSrc}
              alt={category.title}
            />
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            {category.description && (
              <p className="text-gray-600 mb-4">{category.description}</p>
            )}
            {category.buttonLabel && (
              <button className=" text-white py-2 px-4 rounded">
                {category.buttonLabel} →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
