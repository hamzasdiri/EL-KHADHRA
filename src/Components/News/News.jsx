import React, {createContext} from 'react';
import './News.css';
import {NewsList} from './NewsList';
import { Link } from "react-router-dom";
import New from './New'

let title,content,imageNew;
function News() {
  
  return (
<>
{NewsList.map((news) => 
  <div className="posts" style={{backgroundImage: `url(${news.image})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
    <div>
    <h1>{news.title}</h1>
    <br></br>
    <h2>{news.content}</h2>
    <Link to="/New" 
      >
    <a href="#" className="style-6" onClick={<New title={news.title} content={news.content} image={news.image}/>}>
    المزيد
    </a>
    </Link>
    </div>
  </div>

)}
<Link to={"/"} className="menu__link"><a href="#" className='btn btn-white btn-animate' id="menu_link_back_news">عودة</a></Link>  
</>
)

}

export default News