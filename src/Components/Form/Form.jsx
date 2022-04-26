import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
React.useLayoutEffect = React.useEffect;

function Form() {
  return (
    <div>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              ليس لديك حساب ؟
            </label>

            <input
              type="text"
              name="txt"
              placeholder="الاسم واللقب "
              required=""
              className="formInput"
            />

            <input
              type="text"
              name="phone-number"
              placeholder="رقم الهاتف"
              required=""
              className="formInput"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإكتروني"
              required=""
              className="formInput"
            />
            <input
              type="password"
              name="pswd"
              placeholder="كلمة السر "
              required=""
              className="formInput"
            />
             <div>
            <input list="gouvs" name="gouv" className="formInput"   placeholder="اختر الولاية"/>
  <datalist id="gouvs">
    <option value="أريانة"></option>
    <option value="باجة"></option>
    <option value="بنزرت"></option>
    <option value="قابس"></option>
    <option value="ڤفصة"></option>
    <option value="جندوبة"></option>
    <option value="القيروان"></option>
    <option value="القصرين"></option>
    <option value="ڤبلي"></option>
    <option value="الكاف"></option>
    <option value="المهدية"></option>
    <option value="منوبة"></option>
    <option value="مدنين"></option>
    <option value="المنستير"></option>
    <option value="نابل"></option>
    <option value="صفاقس"></option>
    <option value="سيدي_بوزيد"></option>
    <option value="بن_عروس"></option>
    <option value="سليانة"></option>
    <option value="سوسة"></option>
    <option value="تطاوين"></option>
    <option value="توزر"></option>
    <option value="تونس"></option>
    <option value="زغوان"></option>
    </datalist>
    </div>
    <br></br>
    <div className="typeUtilisateur">
              <input type="radio" name="utilisateur" defaultValue="agriculteur" /> فلاح
              <input type="radio" name="utilisateur" defaultValue="prestataire de services" /> مزود الخدمة
            </div>
            <br></br>
            <div className="gender">
              <input type="radio" name="gender" defaultValue="male" /> ذكر
              <input type="radio" name="gender" defaultValue="female" /> انثى
            </div>
            
            <button>انشاء حساب</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              تسجيل الدخول
            </label>
            <input
              type="email"
              name="email"
              placeholder="البريد الإكتروني"
              required=""
              className="formInput"
            />
            <input
              type="password"
              name="pswd"
              placeholder="كلمة السر "
              required=""
              className="formInput"
            />
            <button>دخول</button>
          </form>
        </div>
      </div>
      
        <Link to={"/"} className="menu__link">
          <a href="#" class="btn btn-white btn-animate" id='menu_link_back_form'>
            عودة
          </a>
        </Link>
      
    </div>
  );
}

export default Form;
