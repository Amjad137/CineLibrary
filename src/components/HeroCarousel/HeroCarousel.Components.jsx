import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./ArrowsAll.Components";
import axios from "axios";
const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const NowPlayingMovies = await axios.get("movie/now_playing");
      setImages(NowPlayingMovies.data.results);
    };
    requestNowPlayingMovies();
  }, []);

  const settingLg = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "300px",
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "50px",
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // single settings also can be used,efer bottom for more
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image, index) => {
            return (
              <div className="w-full h-56 md:h-80 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingLg}>
          {images.map((image, index) => {
            return (
              <div className="w-full h-96 px-2 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

//  const settings = {
//    dots: true,
//    arrows: true,
//    slidesToShow: 1,
//    infinite: true,
//    centerMode: true,
//    centerPadding: "300px",
//    speed: 500,
//    slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 2000,
//    cssEase: "linear",
//    nextArrow: <NextArrow />,
//    prevArrow: <PrevArrow />,
//    responsive: [
//      {
//        breakpoint: 1024,
//        settings: {
//          dots: true,
//          arrows: true,
//          slidesToShow: 1,
//          infinite: true,
//          centerMode: true,
//          centerPadding: "200px",
//          speed: 500,
//          slidesToScroll: 1,
//          autoplay: true,
//          autoplaySpeed: 2000,
//          cssEase: "linear",
//          nextArrow: <NextArrow />,
//          prevArrow: <PrevArrow />,
//        },
//      },
//      {
//        breakpoint: 600,
//        settings: {
//          dots: false,
//          arrows: true,
//          slidesToShow: 1,
//          infinite: true,
//          centerMode: true,
//          centerPadding: "50px",
//          speed: 500,
//          slidesToScroll: 1,
//          autoplay: true,
//          autoplaySpeed: 2000,
//          cssEase: "linear",
//          nextArrow: <NextArrow />,
//          prevArrow: <PrevArrow />,
//        },
//      },
//      {
//        breakpoint: 480,
//        settings: {
//          dots: false,
//          arrows: true,
//          slidesToShow: 1,
//          infinite: true,
//          centerMode: true,
//          centerPadding: "30px",
//          speed: 500,
//          slidesToScroll: 1,
//          autoplay: true,
//          autoplaySpeed: 2000,
//          cssEase: "linear",
//          nextArrow: <NextArrow />,
//          prevArrow: <PrevArrow />,
//        },
//      },
//    ],
//  };
