import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-evenly border-b-2 border-black py-4">
      <div className="font-Fatface text-4xl">
        <Link to="/">HOME</Link>
      </div>
      <div className="font-Fatface text-4xl">
        <Link to="/dr/story">STORY</Link>
      </div>
      <div className="font-Fatface text-4xl">
        <Link to="/dr/gallery">GALLERY</Link>
      </div>
      <div className="font-Fatface text-4xl">
        <Link to="/dr/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Nav;
