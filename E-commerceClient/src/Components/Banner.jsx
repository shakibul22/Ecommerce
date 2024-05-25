import { useContext } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { createContextProvider } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { searchTerm, setSearchTerm, setSearchResults } = useContext(
    createContextProvider
  );
  const navigate = useNavigate();
  const handleSearch = async () => {
    // console.log(searchTerm);
    try {
      const response = await axios.get(
        `https://e-commerce-server-sandy.vercel.app/search?query=${searchTerm}`
      );
      setSearchResults(response.data);
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      // Navigate to the search page with the search query as a URL parameter
      // eslint-disable-next-line no-undef
      navigate(`/search?query=${encodedSearchTerm}`);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  // console.log(searchResults);
  return (
    <>
      <div className="container bg-[#C1DCDC] p-10 rounded-xl justify-center items-center mx-auto flex flex-row ">
        <div className="text-center md:text-left mb-6 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Buy your dream plants
          </h1>
          <div className="flex justify-center md:justify-start items-center space-x-4 mb-4">
            <div>
              <span className="text-xl font-bold text-gray-900">50+</span>
              <p className="text-gray-600">Plant Species</p>
            </div>
            <div className="border-l border-gray-400 h-6"></div>
            <div>
              <span className="text-xl font-bold text-gray-900">100+</span>
              <p className="text-gray-600">Customers</p>
            </div>
          </div>
          <div className="relative max-w-xs mx-auto md:mx-0">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 pl-4 pr-12 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-0 top-0 mt-3 mr-4 text-gray-600"
              onClick={handleSearch}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full px-4 ">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                alt="hero"
                className="max-w-full lg:ml-auto"
              />
              <span className="absolute -bottom-8 -left-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
