import React from "react";
import Nav from "../components/Nav";
import heading from "../assets/images/myFonts/dr_mark_heading.png";
import "/src/App.css";

function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex justify-center bounce-in-right">
        <img className="w-[975px] h-[480px]" src={heading} alt="Image" />
      </div>
    </div>
  );
}

export default Home;
