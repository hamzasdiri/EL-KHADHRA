import React from 'react';
import './Services.css';
import img1 from '../../assets/img/sheep.jpg';
import img2 from '../../assets/img/irrigation.jpg';
import img3 from '../../assets/img/tractor.jpg';
import img4 from '../../assets/img/planting.jpg';
import { Link } from "react-router-dom";


function Services() {
  return (
      <>
      <div className='Services-text'>
          <h1>الخدمات</h1>
          </div> 
    <div className="cards-list">
  <div className="card 1">
    <div className="card_image">
      
      <img src={img1} />
    </div>
    <div className="card_title title-white">
      <p>خدمات بيطرية</p>
    </div>
  </div>
  
  <div className="card 2">
    <div className="card_image">
      
      <img src={img2} />
    </div>
    <div className="card_title title-white">
      <p>خدمات المياه</p>
    </div>
  </div>

  <div className="card 3">
    <div className="card_image">
      
      <img src={img3} />
    </div>
    <div className="card_title title-white">
      <p>معدات الزراعة</p>
    </div>
  </div>

  <div className="card 4">
    <div className="card_image">
      
      <img src={img4} />
    </div>
    <div className="card_title title-white">
      <p>خدمات الزراعة</p>
    </div>
  </div>
</div>
        <Link to={"/"} className="menu__link">
          <a href="#" class="btn btn-white btn-animate" id='menu_link_back'>
            عودة
          </a>
        </Link>
</>
  )
}

export default Services