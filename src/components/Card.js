import AddToCartBtn from "./AddToCartBtn";
import ViewDetailsBtn from "./ViewDetailsBtn";

const Card = ({name, price, popul, genre, img, instock, id}) => {
  let imgs = '/sellingPS3games' + img;
  return (
    <div className="card__wrapper">
      <div className="cardImg__div">
        <img src={imgs} alt="name" />
      </div>
      <div className="card__details">
        <h3>{name}</h3>
        <span>{price}.00 EUR</span>
        <span className="product__id_product">#{id}</span>
      </div>
      <div className="card__btns">
        <AddToCartBtn id={id} />
        <ViewDetailsBtn name={name} price={price} popul={popul} genre={genre} img={img} instock={instock} id={id} />
      </div>
    </div>
  )
}

export default Card;