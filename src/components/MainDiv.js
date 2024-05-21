// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const mainLogo = window.location.origin + '/sellingPS3games/assets/Logoes/ps__logo.png'
const actionIcon = window.location.origin + '/sellingPS3games/assets/Icons/swords.png'
const sportIcon = window.location.origin + '/sellingPS3games/assets/Icons/sports.png'
const adventureIcon = window.location.origin + '/sellingPS3games/assets/Icons/map.png'
const raceCar = window.location.origin + '/sellingPS3games/assets/Icons/race-car.png'

const MainDiv = () => {
  return (
    <div className="main__div">
      <img src={mainLogo} alt="PS Logo" />
      <div className="rightDots">
        <ul>
          <li><Link to='/sellingPS3games/products/action'><img src={actionIcon} alt="Swords" /></Link></li>
          <li><Link to='/sellingPS3games/products/sports'><img src={sportIcon} alt="Sports icons" /></Link></li>
          <li><Link to='/sellingPS3games/products/adventure'><img src={adventureIcon} alt="Map" /></Link></li>
          <li><Link to='/sellingPS3games/products/racing'><img src={raceCar} alt="Race car" /></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MainDiv;