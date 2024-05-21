import { Link } from "react-router-dom";
import '../styles/cart.css'

const KeepShoping = ({singleProduct}) => {
  return <Link to={`/sellingPS3games${singleProduct}`} ><button className="goBack__btn cart__goBack_button">Continue Shopping!</button></Link>
}


export default KeepShoping;