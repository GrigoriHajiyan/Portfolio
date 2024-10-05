import {  useEffect ,useRef} from 'react'
import useLocalStorege from '../../utils/useLocalStorege'
import React from 'react'
import sun from './sun.svg'
import moon from './moon.svg'
import './style.css'
import detectDarkMode from '../../utils/detectDarkMode'

const BtnModeDark = () => {

const [darkMode, setDarkMode]= useLocalStorege('darkMode', detectDarkMode())
    
    const btnRef = useRef(null);
    

  useEffect(() => {
       
    if(darkMode === 'dark'){
        document.body.classList.add('dark')
        btnRef.current.classList.add('dark-mode-btn--active')
    }else{
        document.body.classList.remove('dark')
        btnRef.current.classList.remove('dark-mode-btn--active')
    }
  },[darkMode])

  useEffect(() => {
    window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
         setDarkMode(newColorScheme)
      
    });

  },[setDarkMode])
    const toggleDarkMode = () => {
            setDarkMode((currentValue) => {
                return currentValue === 'light' ? 'dark' : 'light';
            })        
    }
     
    const btnNormal = 'dark-mode-btn';
     const btnActive = 'dark-mode-btn dark-mode-btn--active'

  return (
    
    <button ref={btnRef} className={darkMode === 'dark ' ? btnActive : btnNormal} onClick={toggleDarkMode}>
    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
  </button>

  );
}

export default BtnModeDark