import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import Who from './Components/Who/Who';
import Team from './Components/Who/Team';
import Weather from './Components/Weather/Weather';
import Profile from './Components/Profile/Profile';
import Test1 from './Components/News/Test1';
import WeatherApi from './Components/Weather/WeatherApi';
import Services from './Components/Services/Services';
import News from './Components/News/News';
import New from './Components/News/New';
function App() {
  
  return (
    <Router>

    <div>

<Routes>

<Route exact path='/' element={<Navbar />} />
<Route path='/Form' element={<Form />} />
<Route path='/Who' element={<Who />} />
<Route path='/Team' element={<Team />} />
<Route path='/Weather' element={<Weather />} />
<Route path='/Profile' element={<Profile />} />
<Route path='/Test1' element={<Test1 />} />
<Route path='/WeatherApi' element={<WeatherApi />} />
<Route path='/Services' element={<Services />} />
<Route path='/News' element={<News />} />
<Route path='/New' element={<New />} />
</Routes>

    </div>
    </Router>

  );
}
ReactDOMServer.renderToString(<App />);

export default App;