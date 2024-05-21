import { motion } from 'framer-motion'
import { useEffect } from 'react';
import ViewDetailsBtn from './ViewDetailsBtn';
import AddToCartBtn from './AddToCartBtn';

const euroIcon = window.location.origin + '/sellingPS3games/assets/Icons/euroLogo.png'

const SliderCard = ({ id, name, year, price, img, instock, genre, popul, multiplayer }) => {
  let imgs = "/sellingPS3games" + img;

  const euroStyle = {
    with: '1rem',
    height: '1rem'
  }

  let jsxElement;
  // let imgs = '/PS3' + img;

  jsxElement = (<>
    <div className="mpSlider_cardImg__div">
      <img src={imgs} alt={name} />
    </div>
    <div className="mpSlide_card__details">
      <h3>{name}</h3>
      <span>{price} <img src={euroIcon} alt="Euro" style={euroStyle} /></span>
      <span className="product__id_slider">#{id}</span>
      </div>
      <div className="mp_card__btns">
        <AddToCartBtn id={id} />
        <ViewDetailsBtn name={name} price={price} year={year} genre={genre} popul={popul} multiplayer={multiplayer} img={img} instock={instock} id={id} />
      </div>

  </>
  )

  return (
    <motion.div className="mpSlider__card">
      {jsxElement}
    </motion.div>

  )

}

export default SliderCard;