import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProductCard from "../../Components/AllProductsCard";
import PaginationComponent from "../../Components/Pagenation";
import Filter from "../../Components/Filter";
import { baseUrl } from "../../BaseUrl/baseUrl";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeRating, setActiveRating] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/products`);
        setProducts(res.data);
        setFilteredResults(res.data); // Initialize filteredResults with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Apply filtering when minPrice, maxPrice, or products change
  useEffect(() => {
    let filtered = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!activeBrand || product.brand === activeBrand) && // Filter by activeBrand
        (!activeRating || product.rating === activeRating) // Filter by activeRating
      );
    });

    if (sortBy) {
      filtered.sort((a, b) => {
        if (sortBy === "lowToHigh") {
          return a.price - b.price;
        } else if (sortBy === "highToLow") {
          return b.price - a.price;
        } else if (sortBy === "ratingHighToLow") {
          return b.rating - a.rating;
        } else if (sortBy === "ratingLowToHigh") {
          return a.rating - b.rating;
        }
      });
    }

    setFilteredResults(filtered);
  }, [products, minPrice, maxPrice, sortBy, activeBrand, activeRating]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-3 lg:px-0 container mx-auto py-10">
      <div className="flex flex-row justify-end items-end ">
        <div className="flex items-center gap-2 mb-4 w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ps-2 py-2 border text-xs border-[#8c53fa] w-[150px] lg:w-full rounded-md focus:outline-none"
          >
            <option defaultValue="" disabled>
              Sort by:
            </option>
            <option className="text-sm" value="lowToHigh">
              Low to High Price
            </option>
            <option className="text-sm" value="highToLow">
              High to Low Price
            </option>
            <option className="text-sm" value="ratingHighToLow">
              Rating High to Low
            </option>
            <option className="text-sm" value="ratingLowToHigh">
              Rating Low to High
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <Filter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sortBy={sortBy}
          setSortBy={setSortBy}
          activeBrand={activeBrand}
          setActiveBrand={setActiveBrand}
          activeRating={activeRating}
          setActiveRating={setActiveRating}
        />
        <div className="p-1 grid grid-cols-2  lg:grid-cols-4 gap-2 lg:gap-5 container mx-auto items-center justify-center">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <AllProductCard
                key={product._id}
                id={product._id}
                discount={product.discountPercentage}
                price={product.price}
                discountType="%"
                name={product.title}
                rating={product.rating}
                image={product.thumbnail}
                discountedPrice={
                  product.price -
                  (product.price * product.discountPercentage) / 100
                }
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
