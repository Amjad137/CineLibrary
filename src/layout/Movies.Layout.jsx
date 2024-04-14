import React from "react";
import NavBar from "../components/NavBar/NavBar.Components";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />
        <div className="pb-2">
          <hr />
          <h3 className=" text-center font-light ">Copyright @ CineLibrary</h3>
        </div>
      </div>
    );
  };

export default MovieLayoutHoc;
