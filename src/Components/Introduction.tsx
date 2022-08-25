import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import arrow from '../Assets/arrow-right.png';
import brenda from '../Assets/brenda.jpg';
import cooking from '../Assets/cooking.jpg';
import travel from '../Assets/travel.jpg';
import travel1 from '../Assets/travel1.jpg';
import travel2 from '../Assets/travel2.jpg';
import '../Stylings/home.css';

function Introduction() {
  const imageData = [brenda, cooking, travel, travel1, travel2];
  const [nextimage, setNextimage]: any = useState(imageData[0]);
  const [counter, setCounter]: any = useState(0);
  let cn: any;
  const imageProcess = (e: any) => {
    //console.log(e.target.className);
    cn = e.target;
    cn && cn.classList.add('active');
    if (counter === 4) {
      setCounter(0);
    } else {
      setCounter((prev: number) => prev + 1);
    }

    setNextimage(imageData[counter]);
    cn && cn.classList.remove('active');
  };

  return (
    <>
      <div id="introduction-wrapper">
        <div className="intro-text">
          <h2>Hi</h2>
          <p>
            I am Erdi. I love creating user-friendly, fun, responsive websites.
            Please enjoy images of my other loves, which include traveling,
            cooking, gardening, and adventurous road trips!
          </p>
        </div>
        <div className="intro-img">
          <Carousel
            className="carousel"
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <img src={imageData[0]} alt="/" />
            </div>
            <div>
              <img src={imageData[1]} alt="/" />
            </div>
            <div>
              <img src={imageData[2]} alt="/" />
            </div>
            <div>
              <img src={imageData[3]} alt="/" />
            </div>
            <div>
              <img src={imageData[4]} alt="/" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Introduction;
