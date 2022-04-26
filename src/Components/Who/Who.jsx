import React from 'react';
import Video1 from '../../assets/video/whoarewe.mp4';
import { Link } from "react-router-dom";
import './Who.css';
import Team from './Team';

function Who() {
  return (
    <div>
        <video autoPlay loop muted src={Video1} type="video/mp4" className="video">
        </video>  
        <div class="text-box">
        <Link to={"/"} className="menu__link"><a href="#" class="btn btn-white btn-animate" id='menu_link_back'>عودة</a></Link>  
        </div>
        <br></br><br></br><br></br>
        <Team />
      </div>
  )
}

export default Who;