import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery__wrapper"  id='gallery'>
      <Link to='/sellingPS3games/gallery'>
        <div className="gallery__div">
          <h2>Photo Gallery</h2>
        </div>
      </Link>
    </div>
  )
}

export default Gallery;