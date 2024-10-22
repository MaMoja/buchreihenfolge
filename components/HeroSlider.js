import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="bg-cover h-96" style={{ backgroundImage: "url(/images/hero1.jpg)" }}>
        <div className="text-white p-10">Highlight Buch 1</div>
      </div>
      <div className="bg-cover h-96" style={{ backgroundImage: "url(/images/hero2.jpg)" }}>
        <div className="text-white p-10">Highlight Buch 2</div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
