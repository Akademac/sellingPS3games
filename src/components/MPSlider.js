import "../styles/slider.css";
import SliderCard from "./SliderCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const MPSlider = ({ allData }) => {

  const [width, setWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const carousel = useRef();

  const carouselWrapper = useRef();

  let mpArr = [];
  let jsxElement;

  if (allData) {
    let x;
    allData.forEach(e => {
      x = allData.filter(e => e.popul > 70)
    })
    if (x) {
      mpArr.push(...x)
    }
  }

  useEffect(() => {
    if (allData) {
      setSliderWidth(mpArr.length * 512)
      setWidth(mpArr.length * 512 - carouselWrapper.current.offsetWidth)
      if (window.innerWidth < 500) {
        setSliderWidth(mpArr.length * 400)
        setWidth(mpArr.length * 400 - carouselWrapper.current.offsetWidth)
      }
      if (window.innerWidth < 380) {
        setSliderWidth(mpArr.length * 250)
        setWidth(mpArr.length * 250 - carouselWrapper.current.offsetWidth)
      }
    }
  }, [allData]);

  let jsxSkeleton = <><Skeleton className="slider__skeleton" /><Skeleton className="slider__skeleton" /><Skeleton className="slider__skeleton" /></>

  if (window.innerWidth < 500) {
    jsxSkeleton = <><Skeleton className="slider__skeleton" /></>
  }

  jsxElement = mpArr.map((e, index) => {
    return <SliderCard key={index} name={e.name} price={e.price}  popul={e.popul} img={e.img} instock={e.instock} id={e.id} year={e.year} genre={e.genre} multiplayer={e.multiplayer} />
  });

  return (
    <motion.div className="slider__container" ref={carouselWrapper}>
      <h3>The Most Popular Games</h3>
      {mpArr.length !== 0 ? <motion.div ref={carousel} className="slider__div" style={{ width: sliderWidth + 'px' }} drag="x" dragConstraints={{ right: 0, left: -width }} >
        {jsxElement}

      </motion.div> : <div className="skeleton__div">{jsxSkeleton}</div>}

    </motion.div>
  );
};

export default MPSlider;
