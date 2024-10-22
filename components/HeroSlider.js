import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/hero-image1.jpg" alt="Book Series 1" />
      </div>
      <div>
        <img src="/images/hero-image2.jpg" alt="Book Series 2" />
      </div>
    </Slider>
  );
};

export default HeroSlider;
