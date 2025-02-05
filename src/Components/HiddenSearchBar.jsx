import React, { useState } from "react";
import "../hiddenSearchBar.css";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className == "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="container"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
