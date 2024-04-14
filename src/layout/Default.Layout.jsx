import React from "react";
import NavBar from "../components/NavBar/NavBar.Components";

const DefaultLayoutHoc =
  (
    Component //passing the component as a parameter
  ) =>
  ({ ...props }) => {
    return (
      <div className="flex flex-col">
        <NavBar />
        <Component {...props} />{" "}
        {/* wrapping the component received as the parameter with navbar and footer,as the component is in the middle,the navbar comes at the top and the footer comes in the down*/}
        <div className="pb-2">
          <hr />
          <h3 className=" text-center font-light ">Copyright @ CineLibrary</h3>
        </div>
      </div>
    );
  };

export default DefaultLayoutHoc;
