import React from 'react';
import './New.css';
import { Link } from "react-router-dom";

function New(props) {
    
  return (
      <>
    <div className="post-new" style={{backgroundImage: "url(../../assets/NewsImg/2.jpg)",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} >
    <div>
        <h1>
    النحل من مهن الرجال التقليدية في تونس، لكن نساء كثيرات انضممن اليهم
    </h1>
    <br></br>
    <h2>
    تعتبر تربية النحل من المهمات المعقدة التي تحتاج الى عناية و رعاية خاصة، لا سيما ان النحل يتأثر كثيرا بالظروف المناخية المحيطة به، سواء اذا ارتفعت درجة الحرارة او هطلت الامطار بغزارة، و ايضا بمدى خصوبة الارض لذا تحتاج تربية النحل الى ارض زراعية في منطقة ريفية توفر المراعي.و المهنة حكر على الرجال لصعوبة العمل فيها، خصوصا ان غالبية خلايا النحل توجد في مرتفعات قرب غابات و اشجار تسمح بان يجد النحل المراعي، و تشكل طبيعة جغرافية صعبة للاناث
</h2>
    
    </div>
    
  </div>
  <Link to={"/"} className="menu__link"><a href="#" className='btn btn-white btn-animate' id="menu_link_back_news">عودة</a></Link> 
  </>
  )
}

export default New