// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Collaborative Storytelling</h1>
      <p>Join the community to create and contribute to ongoing stories!</p>
        <Link to="/stories" style={{ margin: "10px", padding: "10px", backgroundColor: "#4A4A8A", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            View Stories
        </Link>

        <Link to="/upload" style={{ margin: "10px", padding: "10px", backgroundColor: "#4A4A8A", color: "white", textDecoration: "none", borderRadius: "5px" }}>
            Upload a Contribution
        </Link>
    </div>
  );
};

export default Home;
