import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Youtuber",
    rating: 4.5,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    imgSrc:
      "https://res.cloudinary.com/dgohi0iqm/image/upload/v1716359065/unsplash_5aGUyCW_PJw-removebg-preview_k5zlrb.png",
  },
  {
    name: "Jane Smith",
    role: "Influencer",
    rating: 4.8,
    text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    imgSrc:
      "https://res.cloudinary.com/dgohi0iqm/image/upload/v1716359080/unsplash_O3ymvT7Wf9U-removebg-preview_kr0agw.png",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          What customers say about GREEMIND?
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-lg bg-[#C1DCDC] p-6 rounded-lg shadow-lg m-4"
          >
            <p className="mb-6 text-gray-700">{testimonial.text}</p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-xl object-cover mr-4"
                src={testimonial.imgSrc}
                alt={testimonial.name}
              />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
              <div className="ml-auto flex items-center">
                <span className="text-black font-semibold">
                  {testimonial.rating}
                </span>
                <svg
                  className="w-5 h-5 text-yellow-400 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.283 3.941a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.368 2.451a1 1 0 00-.364 1.118l1.283 3.941c.3.921-.755 1.688-1.54 1.118l-3.368-2.451a1 1 0 00-1.176 0l-3.368 2.451c-.785.57-1.84-.197-1.54-1.118l1.283-3.941a1 1 0 00-.364-1.118L2.071 9.368c-.783-.57-.381-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.283-3.941z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
