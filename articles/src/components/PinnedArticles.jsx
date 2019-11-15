import React from "react";
import Carousel from "react-multi-carousel";

export default function PinnedArticles() {
 
  return (
    <div className="pinned-articles">
      <div className="title">Pinned</div>
      <div className="articles">
          <div className="card">
              <div className="card-image">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Edward_Snowden_-_Permanent_Record_%28cover%29.jpg/220px-Edward_Snowden_-_Permanent_Record_%28cover%29.jpg" alt=""/>
              </div>
              <div className="card-content">
                  <div className="title">Permanent Record</div>
                  <div className="category">Book</div>
              </div>
          </div>

      </div>
    </div>
  );
}
