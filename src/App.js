import React,{useState} from 'react'
import './App.css'

export default function App() {
  const [input,setInput]=useState(" ")
  const [result,setResult]=useState(0)
  const handler = e =>{
    setInput(e.target.value)

  }
  return (
  
    <center>
      <center><h1>Calculator</h1></center>
    <div className="cal" style={{"padding":"20px"}}>
      <center>
   <input type="text" value={input} name="input" onChange={handler} ></input>
      <br/>
      <h4>Result : {result}</h4>
      <button onClick={()=>setInput(' ')}>clr</button>
      <button onClick={()=>setInput(input+'%')}>%</button>
      <button onClick={()=>setInput(input.slice(0, -1))}>del</button>
      <button onClick={()=>setInput(input+'/')}>/</button><br/>

      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'*')}>*</button><br/>
    
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'+')}>+</button><br/>
  
      <button onClick={()=>setInput(input+'00')}>00</button>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <button onClick={()=>setInput(input+'.')}>.</button>
      <button onClick={()=>setResult(eval(input))}>=</button><br/>
      
      </center>
    </div>
    </center>
   
  )
}
