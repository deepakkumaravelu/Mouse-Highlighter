import React, { useState } from 'react'

const Highlighter = () => {
    const[bgColor,setBgColor]=useState("black");
    const[fontSize,setFontSize]=useState("20px");
     const bgclr={
        fontSize:`${fontSize}`,
        background:`${bgColor}`
     };
  return (
    <div style={bgclr} 
    onMouseEnter={()=>{
        
        setBgColor("white");
        setFontSize("30px");}}
    onMouseLeave={()=>{
        
    setBgColor("black");
    setFontSize("20px")}}    
    ><p>Highlighter</p></div>
  )
}

export default Highlighter