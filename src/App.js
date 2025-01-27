import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  
  <StatsOverlay  scrolled={scrolled}/>
  
  <SecondScreen/>
  {/* <CourseCard/> */}
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
