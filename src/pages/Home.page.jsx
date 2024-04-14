import React, { useEffect, useState } from "react";
import DefaultLayoutHoc from "../layout/Default.Layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Components";
import PosterSlider from "../components/PosterSlider/PosterSlider.Components";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import axios from "axios";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        // "https://api.themoviedb.org/3/movie/top_rated?api_key=7eb855740b1f714c2d0e9eaef1040813"
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=7eb855740b1f714c2d0e9eaef1040813"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPremierMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestStreamMovies = async () => {
      const getStreamMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getStreamMovies.data.results);
    };
    requestStreamMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
          <div className="hidden md:flex w-40 h-10 place-items-end mb-10 ">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/bdg_payments_by_pp_2line.png"
              alt="PayPal"
              className="w-full h-full rounded"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand New Releases Everyday "
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
