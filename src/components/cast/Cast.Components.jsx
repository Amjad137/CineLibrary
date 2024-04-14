import React from "react";

const Cast = (props) => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="Cast and Crew"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div className="w-full h-full">
          <h3 className="text-gray-800 text-xl text-center">
            {props.castName}
          </h3>
        </div>
        <div>
          <h4 className="text-gray-500">{props.role}</h4>
        </div>
      </div>
    </>
  );
};

export default Cast;
