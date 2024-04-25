import React,{useState} from 'react'
import './style.css';
function ColorPicker() {

const [color,setColour]=useState('#FFFFFF');
function ChangeColour(e){
setColour(e.target.value)
}
  return (
    <div>
      <div className='Main-container'>
    
      <h1></h1>
      <p> Selected colour is {color}</p>
      <div className="color-picker" style={{backgroundColor:color}
}>
     </div>
      <label>Select a colour</label>
    <input type='color'  value={color} onChange={ChangeColour}/>
      </div>  
    </div>
  )
}

export default ColorPicker

