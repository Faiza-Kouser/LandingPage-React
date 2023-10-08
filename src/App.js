import { useState } from 'react';
import './App.css';
import './components/Header.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isToggled , setIsToggled] = useState(false);
  const [color , setColor] = useState("header");
   function styleHeader(){
    setColor(isToggled ? "headerStyleChange" : "header" )
    // setColor("headerStyleChange")
  }

  const [colorMain , setColorMain] = useState("main-page heading subheading content iconsEnd")
  const colorMainArray = colorMain.split(" ");

   function styleMain(){
     setColorMain(isToggled ? "mainStyleChange headingChange subHeadingChange contentChange iconsChange" : "main-page heading subheading content iconsEnd")
  }


  const handleClick = () => {
      setIsToggled(!isToggled);
      styleHeader();
      styleMain();
   
  }
  return (
    <div className="App">
      <Header headFunc = {handleClick} colorHeader={color}/>
      <Main colorMain={colorMain} array ={colorMainArray}/>      
    </div>
  );
}

export default App;
