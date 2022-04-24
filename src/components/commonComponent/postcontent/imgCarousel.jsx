import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as React from "react";

const prevArrow = (
  <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="500"
      fill="currentColor"
      className="bi bi-caret-left-fill"
      viewBox="0 0 16 16"
    >
      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
    </svg>
  </div>
);

const nextArrow = (
  <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="500"
      fill="currentColor"
      className="bi bi-caret-right-fill"
      viewBox="0 0 16 16"
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  </div>
);

const properties = {
  transitionDuration: 500,
  indicators: true,
  autoplay: false,
};

export default function ImgCarousel({ width, imgs }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="slide-container">
      <Slide
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        {...properties}
        prevArrow={isHovering ? prevArrow : <div></div>}
        nextArrow={isHovering ? nextArrow : <div></div>}
      >
        {imgs.map((slideImage) => (
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImage})`,
                height: 500,
                width: { width },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
