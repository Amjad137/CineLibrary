import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EntertainmentCard = (props) => {
  return (
    <div className="mx-1">
      <img
        src={props.src}
        alt="entertainment"
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImages = [
    "https://images.pexels.com/photos/8147320/pexels-photo-8147320.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/4039987/pexels-photo-4039987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/1452793/pexels-photo-1452793.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7234297/pexels-photo-7234297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8273630/pexels-photo-8273630.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12282183/pexels-photo-12282183.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7234226/pexels-photo-7234226.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {EntertainmentImages.map((image, index) => (
        <EntertainmentCard src={image} key={index} />
      ))}
    </Slider>

    // <Slider {...settings}>
    //   {EntertainmentImages.map((image) => {
    //     return (
    //       <div>
    //         <img src={`${image}`} alt="" />
    //       </div>
    //     );
    //   })}
    // </Slider>
  );
};

export default EntertainmentCardSlider;
