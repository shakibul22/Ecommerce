import React from "react";
import { PiTreePalmLight } from "react-icons/pi";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-center font-bold text-2xl"> About Us</h2>
      <p className="text-center py-6">
        Order now and appreciate the beauty of nature
      </p>
      <div className="md:flex md:flex-wrap justify-center items-center md:-mx-4 mt-6 md:mt-12">
        <div className="md:w-[400px] md:px-4 xl:px-10 mt-8 md:mt-0 text-center">
          <span className="w-20 h-auto bg-[#c1dcdc] p-5 rounded-full  inline-block mb-3">
            {" "}
            <img
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1716354014/Vector_2x_ph0s1l.png"
              alt=""
            />
          </span>
          <h5 className="text-xl font-medium uppercase mb-4">
            Large Assortment
          </h5>
          <p className="text-gray-600">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>

        <div className="md:w-[400px] md:px-4 xl:px-10 mt-8 md:mt-0 text-center">
          <span className="w-20 h-auto bg-[#c1dcdc] p-5 rounded-full  inline-block mb-3">
            <img
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1716354077/Vector_wdpnxz.png"
              alt=""
            />
          </span>
          <h5 className="text-xl font-medium uppercase mb-4">
            Fast & Free Shipping
          </h5>
          <p className="text-gray-600">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>

        <div className="md:w-[400px] md:px-4 xl:px-10 mt-8 md:mt-0 text-center">
          <span className="w-20 h-auto bg-[#c1dcdc] p-5 rounded-full  inline-block mb-3">
            <img
              src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1716354096/Vector_1_jogskf.png"
              alt=""
            />
          </span>
          <h5 className="text-xl font-medium uppercase mb-4">24/7 Support</h5>
          <p className="text-gray-600">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
