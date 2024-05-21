import {useSelector} from 'react-redux';

const CheckOutPage = () => {
  window.scrollTo(0, 0);
  const cartData = useSelector(state => state.addToCartR);
  const allData = useSelector(state => state.gettingAllDataR);
  let buyingArr = [];
  let totalPriceArr = [];
  let totalPrice;
  if (allData && allData.data) {
    allData.data.forEach(e => {
      cartData.forEach(ee => {
        if (e.id === ee) {
          buyingArr.push(e);
        }
      })
    })
  }

  buyingArr.forEach(e => {
    totalPriceArr.push(e.price);
  })

  if(totalPriceArr.length !== 0) {
    totalPrice = totalPriceArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  else {
    totalPrice = 0
  }

  
  let priceWithPercent;

  priceWithPercent = totalPrice - totalPrice/10;

  return (
    <div className="checkout__wrapper">
      <div className="checkout__div">
        <div className="checkout__details">
          <p>Fill out the form.</p>
          <span>* mandatory fields!</span>
          <hr />
        </div>
        <form action="">
          <div className="checkedoutForm__div">
            <span>*</span>
            <input type="text" name="first_name" placeholder="Name" required />
          </div>
          <div className="checkedoutForm__div">
            <span>*</span>
            <input
              type="text"
              name="last_name"
              placeholder="Surname"
              required
            />
          </div>    
          <div className="checkedoutForm__div">
            <span>*</span>
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div className="checkout__total">
            <span>Total price <b>{buyingArr.length > 2 ? priceWithPercent : totalPrice} EUR</b></span>
          </div>
          <button type="submit" className="finalBuying__btn">Buy!</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
