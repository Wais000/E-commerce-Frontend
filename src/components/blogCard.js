import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-main-container">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">19 APRIL, 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="description">
            Our Latest News A beautiful sunday morning renaissance
          </p>
          <Link to="" className="button">READ MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
