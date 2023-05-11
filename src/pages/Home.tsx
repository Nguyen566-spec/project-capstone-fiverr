import React from "react";
import Carousel from "../components/Carousel";
import PopularServices from "../components/PopularServices";
import Introduction from "../components/Introduction";
import Wegot from "../components/Wegot";
import FiverrBusiness from "../components/FiverrBusiness";
import SlideMember from "../components/SlideMember";
// import CongViecList from "../module/CongViecList";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-center font-bold text-4xl p-4">
        Danh sách công việc
      </h1>
      <CongViecList /> */}
      <Carousel />
      <section className="trust">
        <div className="trust-content">
          <p>Trusted by:</p>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
            alt="facebook"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
            alt="Google"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
            alt="NETFLIX"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png"
            alt="P&G"
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png"
            alt="PayPal"
          />
        </div>
      </section>
      <PopularServices />
      <Introduction />
      <Wegot />
      <FiverrBusiness />
      <SlideMember />
    </div>
  );
};

export default Home;
