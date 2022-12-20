import React, { useEffect, useState } from "react";

import "./carousel1.css";

import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

export const CarouselItem = (props) => {
  return (
    <div className="carousel-item">
      <div className="carousal-item-single">
        <div className="carousel-leftside">
        <img src={props.imageURL} className="carousel-image" />

        </div>

        <div className="carousel-rightside">
          <h1> {props.title} </h1>
          <p>{props.text}</p>
          <a
            href={props.buttonURL}
            className="no-decoration"
            target="_blank"
            link="noreferrer"
          >
            <button className="button-primary">
              {props.buttonText}
              <RiArrowRightUpLine className="button-primary-icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};


  const Carousel1 = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);
 
//   const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 9000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

  return (
    <div className="carousel-container">
      <div
        className="carousel"

        // onMouseEnter={() => setPaused(true)}
        // onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>

        <div className="indicators">
          <button
            className="navigation-button"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <RiArrowLeftSLine />
          </button>
          {React.Children.map(children, (child, index) => {
            return (
              <span
                className={`index-button ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                {/* {index + 1} */}
              </span>
            );
          })}

          <button
            className="navigation-button"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
