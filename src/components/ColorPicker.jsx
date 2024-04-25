import React,{useState} from 'react'

function ColorPicker() {

const [color,setColour]=useState('#FFFFFF');
function ChangeColour(e){
setColour(e.target.value)
}
  return (
    <div>
      <div>
    
      <h1></h1>
      <div className="color-picker" style={{backgroundColor:color}
}>
      <p> Selected colour is {color}</p></div>
      <label>Select a colour</label>
    <input type='color' value={color} onChange={ChangeColour}/>
      </div>  
    </div>
  )
}

export default ColorPicker

