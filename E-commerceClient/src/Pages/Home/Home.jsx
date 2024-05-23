import AboutUs from "../../Components/AboutUs";
import Banner from "../../Components/Banner";
import BestSellingProducts from "../../Components/BestSellingProducts";
import Categories from "../../Components/Categories";
import Testimonials from "../../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <BestSellingProducts />
      <Categories />
      <Testimonials />
    </div>
  );
};

export default Home;
