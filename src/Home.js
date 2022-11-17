import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Link to="/kolkata">Kolkata</Link>
      <Link to="/mumbai">Mumbai</Link>
      <Link to="/assam">Assam</Link>
    </div>
  );
};

export default Home;
