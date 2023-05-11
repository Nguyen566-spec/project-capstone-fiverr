import React from "react";

type Props = {};

const SliderInfinity = (props: Props) => {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__slide">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="Slide 1" />
        </div>
        <div className="slider__slide">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg" alt="Slide 2" />
        </div>
        <div className="slider__slide">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="slider__controls">
        <button className="slider__prev">Prev</button>
        <button className="slider__next">Next</button>
      </div>
    </div>
  );
};

export default SliderInfinity;
