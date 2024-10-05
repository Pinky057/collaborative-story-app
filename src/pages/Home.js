// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Collaborative Storytelling</h1>
      <p>Join the community to create and contribute to ongoing stories!</p>
      <Link to="/stories">View Stories</Link>
      <Link to="/upload">Upload a Contribution</Link>
    </div>
  );
};

export default Home;
