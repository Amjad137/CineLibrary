import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./MovieInfo.Components";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="lg:hidden w-full md:flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Movie Poster"
          className="rounded "
          style={{ width: "calc(100 % -5rem)" }}
        />

        <MovieInfo heroMob={true} />
      </div>
      {/* <div className="flex flex-col lg:hidden gap-3">
        <div className="flex flex-col-reverse gap-3 px-3 my-3 ">
          <div className="text-black flex flex-col gap-2 md:px-4">
            <h4>4.4k Rating</h4>
            <h4>English, Tamil, Hindi</h4>
            <h4>
              {movie.runtime} min | {genres}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg p-3">
            149/-
          </button>
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg p-10">
            999/-
          </button>
        </div>
      </div> */}

      {/* Large Screen */}
      <div
        className="relative hidden w-full lg:block overflow-x-hidden"
        style={{ height: "28rem" }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34,34,34) 24.95%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.03) 97.47%, rgb(34,34,34) 100%)", //rgb(r,g,b) opacity | rgba(r,g,b,internal opacity)
          }}
        >
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <MovieInfo />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="Backdrop Poster"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
