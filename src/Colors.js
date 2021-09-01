import { useState } from 'react';
import './App.css';
import ButtonsPanel from './ButtonsPanel';
import Heading from './Heading';
import './Colors.css'


function Colors() {

  const [headingText, setHeadingText] = useState('Colors App');
  
  return (
  <div className="colors">
    <Heading text={headingText}/>
    {/* <button onClick={()=>setClass('red')}>Red</button>
    <button onClick={()=>setClass('green')}>Green</button>
    <button onClick={()=>setClass('blue')}>Blue</button> */} 
    <ButtonsPanel setText = {setHeadingText}/>
  </div>
   
  );
}

export default Colors;
