import { addToCart } from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import { isInCart } from '../redux/reducers/addToCart';


const AddToCartBtn = ({ id }) => {

  const dispatch = useDispatch();

  const state = useSelector(state => state.addToCartR);

  const addId = () => {
    dispatch(addToCart(id));
    console.log("From AddToCartBtn:" + state + ',' + id);
  }


  return (
    <button onClick={addId} className="addToCart__btn">{isInCart(state, id) ? 'Already in Cart!' : 'Add to Cart!'}</button>
  )
}

export default AddToCartBtn;