import React from "react";
import { NavLink } from "react-router-dom";


const navbar = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return <div className = "navbar">
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/actors">Actors</NavLink>
    <NavLink to="/directors">Directors</NavLink>
  </div>;
}

export default NavBar;
