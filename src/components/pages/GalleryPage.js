import '../../styles/gallery.css';
import { useState, useEffect } from 'react';


const img1 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_1.jpg";
const img2 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_2.jpg";
const img3 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_3.jpg";
const img4 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_4.png";
const img5 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_5.jpg";
const img6 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_6.webp";
const img7 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_7.jpg";
const img8 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_8.webp";
const img9 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_9.jpg";
const img10 = window.location.origin + "/sellingPS3games/assets/Gallery_images/galleryImg_10.avif";



const GalleryPage = () => {
  window.scrollTo(0, 0);
  let [galeryMl, setGalleryMl] = useState(0);
  let [arrowRight, setArrowRight] = useState(false);
  let [arrowLeft, setArrowLeft] = useState(true);


  const handleGallery = (e) => {
    if (e === 'left') {
      setGalleryMl(galeryMl - 100);
    }
    else if (e === 'right') {
      setGalleryMl(galeryMl + 100);
    }
  }

  useEffect(() => {
    if (galeryMl < 0) {
      setArrowRight(true)
    }
    else {
      setArrowRight(false)
    }
    if (galeryMl < -800) {
      setArrowLeft(false)
    }
    else {
      setArrowLeft(true)
    }
  }, [galeryMl])

  return (
    <div className="gallery__container">
      <div className='over_div'>
        <i className="far fa-arrow-alt-circle-left left_arrow" onClick={() => handleGallery('left')} style={{ display: arrowLeft ? 'inline' : 'none' }}></i>
        <i className="far fa-arrow-alt-circle-right right_arrow" onClick={() => handleGallery('right')} style={{ display: arrowRight ? 'inline' : 'none' }}></i>
        <span className='go_back' >
          <i className="fas fa-caret-left" onClick={() => { window.open('/sellingPS3games', '_self') }} style={{cursor: 'pointer', zIndex: '2000'}}></i>
        </span>
      </div>
      <div className='container' style={{ left: `${galeryMl}vw` }}>
        <div className='imgs_div'>
          <img src={img1} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img2} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img3} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img4} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img5} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img6} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img7} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img8} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img9} alt="PS3 Games" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img10} alt="PS3 Games" className='imgs' />
        </div>
      </div>
    </div>
  )
}


export default GalleryPage;

// 