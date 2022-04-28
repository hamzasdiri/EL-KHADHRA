import React from 'react';
import './Team.css';
import img1 from '../../assets/TeamImg/Yosr.jpg';
import img2 from '../../assets/TeamImg/Youssef.jpg';
import img3 from '../../assets/TeamImg/Nour.jpg';
import img4 from '../../assets/TeamImg/Rym.jpg';
import img5 from '../../assets/TeamImg/Ayoub.jpg';
import img6 from '../../assets/TeamImg/Lamis.jpg';
import img7 from '../../assets/TeamImg/Abir.jpg';
import img8 from '../../assets/TeamImg/Aziz.jpg';
import img9 from '../../assets/TeamImg/Ahmed.jpg';
import img10 from '../../assets/TeamImg/Amir.jpg';
import img11 from '../../assets/TeamImg/Aymen.jpg';
import img12 from '../../assets/TeamImg/Emna.jpg';
import img13 from '../../assets/TeamImg/Lina.jpg';
import img14 from '../../assets/TeamImg/Melek.jpg';
import img15 from '../../assets/TeamImg/Menyara.jpg';
import img16 from '../../assets/TeamImg/Rafed.jpg';
import img17 from '../../assets/TeamImg/Noureddine.jpg';
function Team() {
  return (
    <div className="container">
    <h1 className="heading">
      <span>meet</span>Our Team
    </h1>
    <div className="profiles">
      <div className="profile">
        <img src={img1} className="profile-img" />
        <h3 className="user-name">Bichiou Yosr</h3>
        <h5>Project Manager </h5>
        <p>
        </p>
      </div>
      <div className="profile">
        <img src={img2} className="profile-img" />
        <h3 className="user-name">Achouri Youssef</h3>
        <h5>Project Manager Adjoint</h5>
        <p>
          
        </p>
      </div>
      
    </div>
    <div className="profiles profiles-2">
      <div className="profile">
        <img src={img3} className="profile-img" />
        <h3 className="user-name">Trabelsi Nour</h3>
        <p>
        </p>
      </div>
      <div className="profile">
        <img src={img4} className="profile-img" />
        <h3 className="user-name">Amdouni Rym</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img5} className="profile-img" />
        <h3 className="user-name">Bahroun Ayoub</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img14} className="profile-img" />
        <h3 className="user-name">Cherif Melek</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img7} className="profile-img" />
        <h3 className="user-name">Abdelghani Abir</h3>
        <p>
          
        </p>
      </div>
      
    </div>
    <div className="profiles profiles-2">
      
      <div className="profile">
        <img src={img9} className="profile-img" />
        <h3 className="user-name">Ben Aissa Ahmed</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img10} className="profile-img" />
        <h3 className="user-name">Ellouz Amir</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img11} className="profile-img" />
        <h3 className="user-name">Rebhi Aymen</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img12} className="profile-img" />
        <h3 className="user-name">Dammak Emna</h3>
        <p>
          
        </p>
      </div>
      
    </div>
    <div className="profiles profiles-2">
      <div className="profile">
        <img src={img13} className="profile-img" />
        <h3 className="user-name">Bousbih Lina</h3>
        <p>
        </p>
      </div>
      <div className="profile">
        <img src={img6} className="profile-img" />
        <h3 className="user-name">Abdellaoui Lamis</h3>
        <p>
          
        </p>
      </div>
      <div className="profile">
        <img src={img16} className="profile-img" />
        <h3 className="user-name">Jabri Rafed</h3>
        <p>
          
        </p>
      </div>
      
      
    </div>
  </div>
  )
}

export default Team