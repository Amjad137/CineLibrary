// Context API is is an object that allows components to share data without explicitly passing props through each level of the component tree.
// We can store/edit/update data from any component & then can access it in any of the component

import React, { createContext, useState } from "react";

export const MovieContext = createContext(); //creating context named MovieContext

const MovieProvider = ({ children }) => {
  //children is just like props
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
    original_name: "",
  });
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

// at last wrap up <App> in index.js with MovieProvider Tag
