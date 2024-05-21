import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../redux/actions/index";

import AddToCartBtn from "../AddToCartBtn";
import Preloader from "../Preloader";
import PageAnim from "../PageAnim";
// import { Link } from "react-router-dom";
import KeepShoping from "../KeepShopping";


const SingleProduct = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const state = useSelector((state) => state.gettingAllDataR);
  const [singleProduct, setSingleProduct] = useState();
  const dispatch = useDispatch();

  let jsxElement;
  let jsxGenre;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (state && !state.fetching) {
      console.log("From SingleProduct: " + id);
      let y = parseInt(id);
      let x = state.data.filter((e) => e.id === y);
      console.log("From SingleProduct: x = " + id);
      setSingleProduct(...x);
      console.log("From SingleProduct: singleProduct= " + id);
    }
  }, [state, id]);

  if(singleProduct) {

    if(singleProduct.genre === 'actions') {
      jsxGenre = 'Actions'
    }
    else if (singleProduct.genre === 'sports') {
      jsxGenre = 'Sports'
    }
    else if (singleProduct.genre === 'adventures') {
      jsxGenre = 'Adventures'
    }
    else if (singleProduct.genre === 'raciog') {
      jsxGenre = 'Racing'
    }
  
  }

  if(!singleProduct) {
    jsxElement = <Preloader mt={"0rem"} />
  } 
  else {
    jsxElement = (
      <div className="sp__div">
      <div className="sp__imgDiv">
         <img src={`/sellingPS3games/${singleProduct.img}`} alt={singleProduct.name} />
      </div>
      <div className="sp__details">
        <h3>{singleProduct.name}</h3>
        <span>{singleProduct.price}.00 EUR</span>
        <span>Genre: {singleProduct.genre}</span>
        <span>In stock: {singleProduct.instock === true ? 'Yes': 'No'}</span>
        <span className="product__id_singleProduct">#{singleProduct.id}</span>
      </div>
      <div className="sp__btns">
        <AddToCartBtn id={singleProduct.id}/>
        <KeepShoping singleProduct={`/products/${singleProduct.genre}`} />

      </div>
    </div>
    )
  }

  return (
    <div className="singleProduct__wrapper">
        <PageAnim />
        {jsxElement}
    </div>
  );
};

export default SingleProduct;
