import { useParams } from "react-router-dom";
import { getData } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../../styles/products.css";
import Card from "../Card";
import PageAnim from "../PageAnim";
import Preloader from "../Preloader";


const Products = () => {
  window.scrollTo(0, 0);
  let { genre } = useParams();
  let [sortedData, setSortData] = useState('');

  let [specData, setSpecData] = useState([]);
  let [showSortDiv, setShowSortDiv] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.gettingAllDataR);
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (state && state.data) {
      setAllData(state.data);
    }
  }, [state]);

  let jsxElement;

  useEffect(() => {
    if (allData) {
      console.log(genre);
      var x = allData.filter((e) => e.genre === genre);
      var y;
      if(sortedData === '') {
        y = x        
      }
      else if (sortedData === 'priceRising') {
        y = x.sort((a, b) => a.price-b.price)
      }
      else if (sortedData === 'priceFalling') {
        y = x.sort((a, b) => b.price-a.price)
      }
      else if (sortedData === 'popularity') {
        y = x.sort((a, b) => b.popul-a.popul)
      }    
      setSpecData(y);
    }
  }, [allData, genre, sortedData]);

  const handleSortingData = (e) => {
    setSortData(e)
  }

  if (state.fetching) {
    jsxElement = (
      <Preloader />
    );
  } else {
    jsxElement = specData.map((e, index) => {
      return (
        <Card
          key={index}
          id={e.id}
          name={e.name}
          price={e.price}
          popul={e.popul}
          genre ={e.genre}
          img={e.img}
          instock={e.instock}
        />
      );
    });
  }

  const habdleShowDiv = () => {
    setShowSortDiv(!showSortDiv);
  };

  return (
    <div className="products__wrapper">
      <PageAnim />
      <div className="productsFilter__div">
        <span>
        Currently, {specData.length < 1 ? " ... " : specData.length} games are presented on the website, but many more are in a database. </span>
        <span className="sort__span">
          <p onClick={habdleShowDiv}>Sort By:</p>
          <div
            onClick={habdleShowDiv}
            className="sort__div"
            style={{ display: !showSortDiv ? "none" : "block" }}
          >
            <p onClick={() => handleSortingData('priceRising')}>- price rising</p>
            <p onClick={() => handleSortingData('priceFalling')}>- price decreasing</p>
            <p onClick={() => handleSortingData('popularity')}>- popular first</p>
          </div>
        </span>
      </div>
      <div className="products__container">{jsxElement}</div>
    </div>
  );
};

export default Products;
