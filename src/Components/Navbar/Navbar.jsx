import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import {ImLeaf} from 'react-icons/im';
React.useLayoutEffect = React.useEffect ;


class Navbar extends Component {
  render(){
    return (
      <div>
       
          
          <div className='khadhra-text'>
          <h1> الخضراء</h1>
          <ImLeaf className='leaf'/>
          </div>
         {/*<span><a href="#"/></span> */} 
  
          <ul className="menu__content">
            <li className="menu__item"><Link to={"/Services"} className="menu__link"><a className="menu__link" href="">الخدمات</a></Link></li>
            <li className="menu__item"><Link to={"/News"} className="menu__link"><a className="menu__link" href="#ABOUT">الاخبار</a></Link></li>
            <li className="menu__item"><Link to={"/Weather"} className="menu__link"><a className="menu__link" href="#CONTACT">الطقس</a></Link></li>
            <li className="menu__item"><Link to={"/Who"} className="menu__link"><a className="menu__link" href="">احنا شكون ؟</a></Link></li>
            <li className="menu__item"><Link to={"/Form"} className="menu__link"><a className="menu__link" href="">تسجيل الدخول </a></Link></li>
  
            
          </ul>
        
         {/* 
  <main>
    <section id="HOME">HOME</section>
    <section id="ABOUT">ABOUT</section>
    <section id="CONTACT">CONTACT</section>
    <section id="WORK">WORK</section>
  </main>
  <svg style={{position: 'absolute', left: '100%'}}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation={15} result="BLUR" />
              <feColorMatrix in="BLUR" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="GOO" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        */}
      </div>
    )
  }
  
}

export default Navbar