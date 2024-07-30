
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../utils/data";
import "./Slider.scss";

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
  }

  return (

    <div className="containers">
      <div className="arrow1" onClick={prevSlide}>
        <ArrowLeftOutlined />
      </div>
      <div className="wrappers" style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
        {
          sliderItems.map((item) => (
            <div className="slide" style={{ backgroundColor: ` #${item.bg}` }} bg={item.bg} key={item.id}>
              <div className="img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="info-container">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button type="submit">SHOP NOW</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="arrow2" onClick={nextSlide}>
        <ArrowRightOutlined />
      </div>
    </div>

    // <div className="hero-banner" >
    //   {
    //     sliderItems.map((item) => (
    //       <div className="content" key={item.id}>
    //         <div className="text-content">
    //           <h1>{item.title}</h1>
    //           <p>
    //             {item.desc}
    //           </p>
    //           <div className="ctas">
    //             <div className="banner-cta v2">Shop Now</div>
    //           </div>
    //         </div>
    //         <img className="banner-img" src={item.img} alt="" />
    //       </div>
    //     ))
    //   }
    // </div>
  );
};

export default Slider;