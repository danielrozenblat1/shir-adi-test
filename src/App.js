import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBarNew from './components/NewNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import Stats from './components/special/Special';
function App() {

  
  
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  
  <Stats  scrolled={scrolled}/>
  
  <SecondScreen/>
  {/* <CourseCard/> */}
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
