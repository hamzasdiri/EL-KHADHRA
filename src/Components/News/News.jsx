import React, { useState } from 'react';
import './News.css';
import {NewsList} from './NewsList';
import { Link } from "react-router-dom";



function News() {
  
  return (
<>
{NewsList.map((news) => 
  <div className="posts" style={{backgroundImage: `url(${news.image})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
    <div>
    <h1>{news.title}</h1>
    <br></br>
    
    <h2>{news.content}</h2>
   {/* 
    <a href="" className="style-6">
    المزيد
    </a>
    */} 
    </div>
  </div>

)}
<Link to={"/"} className="menu__link"><a href="#" className='btn btn-white btn-animate' id="menu_link_back_news">عودة</a></Link>  
</>
)

}

export default News