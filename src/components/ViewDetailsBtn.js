import { Link } from "react-router-dom";  

const ViewDetailsBtn = ({id}) => {
  return<Link to={`/sellingPS3games/product/${id}`}><button className="viewDetails__btn">View details</button></Link>
}

export default ViewDetailsBtn;