import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import Introduction from "../components/Introduction";
import Wegot from "../components/Wegot";
import FiverrBusiness from "../components/FiverrBusiness";
import SliderMember from "../components/SliderMember";
import SliderService from "../components/SliderService";
// import CongViecList from "../module/CongViecList";

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
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
      <SliderService />
      <Introduction />
      <Wegot />
      <FiverrBusiness />
      {/* <h1 className="text-center font-bold text-4xl p-4">
        Danh sách công việc
      </h1>
      <CongViecList /> */}
      <SliderMember />
    </div>
  );
};

export default Home;
