import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://cf.shopee.vn/file/26d6c09c9cdcf42c7fa01c2c630fdc50",
    caption: "Slide 1",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaS5LEqIh48lp-1VR7xr_EKWwDQPhk4vESJJUaMFWLifPP9duM-y8FEWJmliEN_Ps0EfU&usqp=CAU",
    caption: "Slide 2",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQRoGFpBXq60tZmqqD8vWiJeV5gnqY7bkzld8fH0MHxzfrDGK53TFbml4zfCaBrAbGvk&usqp=CAU",
    caption: "Slide 3",
  },
];

const ImgCarousel = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: 300,
                width: "100%",
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImgCarousel;
