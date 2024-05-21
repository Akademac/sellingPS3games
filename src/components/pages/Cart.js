import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../../redux/actions/index';
import PageAnim from '../PageAnim';
import { Link } from "react-router-dom";
import '../../styles/cart.css';
import KeepShoping from "../KeepShopping";
import { useEffect } from "react";
const deleteBtn = window.location.origin + '/sellingPS3games/assets/Icons/deleteBtn.png'


const Cart = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.addToCartR);
  const allData = useSelector(state => state.gettingAllDataR);
  let cartArr = [];
  let totalArr = [];
  let jsxCardElement;

  if (allData && allData.data) {
    allData.data.forEach(e => {
      cartData.forEach(ee => {
        if (e.id === ee) {
          cartArr.push(e);
        }
      })
    })
  }

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  }


  if (cartArr.length === 0) {
    jsxCardElement = (
      <div>
        <p className="empty__cart">Your Cart is Empty!</p>
        <KeepShoping singleProduct={'/'} />
      </div>
    )
  }
  else {
    jsxCardElement = cartArr.map((e, index) => {
      return (
        <div key={index} className='cart__card'>
          <div className="card__delete">
            <img src={deleteBtn} alt="Delete" onClick={() => handleDelete(e.id)} />

          </div>
          <div className="cartCard__imgDv">
            <img src={`/sellingPS3games/${e.img}`} alt={e.name} />
          </div>
          <div className="cartCard__details">
            {e.price}.00 EUR
          </div>
        </div>
      )
    })
  }

  cartArr.forEach(e => {
    totalArr.push(e.price);
  })

  let totalPrice;

  if (totalArr.length !== 0) {
    totalPrice = totalArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  else {
    totalPrice = 0
  }

  let priceWithPercent;

  priceWithPercent = totalPrice - totalPrice / 10;


  return (
    <div className="cart__wrapper">
      <PageAnim />
      <div className="cards__div">
        {jsxCardElement}
      </div>
      <div className="summary__div">
        <div className="product__num">Number of Games: {cartArr.length}</div>
        <div className="totalPrice__num">Total Price: <b>{totalPrice}.00 EUR</b></div>
        <div className="discount__div">
          <p>If you order 3 or more Games, you will receive a discount of 10%.</p>
          <p>Quantity discount: {cartArr.length >= 3 ? <b>achieved</b> : <b>not achieved</b>}.</p>
        </div>
        <div className="priceWithPercent">Price after discount: <b>{cartArr.length > 2 ? `${priceWithPercent} EUR` : `${totalPrice}.00 EUR`}</b></div>
        {cartArr.length > 0 && <Link to='/sellingPS3games/checkout'><button className="buying__btn">Buy!</button></Link>}
      </div>
    </div>
  )
}

export default Cart;