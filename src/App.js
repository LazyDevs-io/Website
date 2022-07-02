
import './App.css';
import Home from './components/home/Home';
import Moon from './components/Moon/Moon';
import Contacts from './components/Site/Contacts';
import Feature from './components/Site/Feature';
import Footer from './components/Site/Footer';
import Homepage from './components/Site/Homepage';
import HomeServices from './components/Site/HomeServices';
import Teams from './components/Site/Teams';
import Welcome from './components/Site/Welcome';
import Intro from './components/Story/Intro';
import Story from './components/Story/Story';
import Team from './components/Story/Team';

function App() {
  return (
    <>
    {/* <div className="App">
      <Moon/>
      <Home/>
      <Story/>
      <Intro/>
      <Team/>
    </div> */}
    <Home/>
    <Homepage/>
    <Welcome/>
    <HomeServices/>
    <Feature/>
    <Teams/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
