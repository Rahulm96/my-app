import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, settext] = useState('Enter your text here');
  const removespacefun = ()=>{
    let arr = text.split(/\s+/)
    arr = arr.filter(str => str !== "");
    return arr.length
  }







  const handlechangeup = () => {
    console.log("handlechange was clicked")
    let newText = text.toUpperCase()
    settext(newText)
    props.showalert("Coverted to upper case ", "success")
  }
  const removespaces = () => {
    // console.log("removespaces was clicked")
    let arr = text.split(/\s+/);
    let newText = arr.join(' ');
    settext(newText)
    props.showalert("spaces removed", "success")
  }
  const handlechangelo = () => {
    console.log("handlechange was clicked")
    let newText = text.toLowerCase()
    settext(newText)
    props.showalert("Coverted to lower case ", "success")
  }
  const changetext = (event) => {
    console.log("changetext was clicked")
    settext(event.target.value)
    
    // console.log(event)
  }
  return (
    <>
      <div className='container'>
        <div className="form-floating my-3">
          <textarea className="form-control" value={text} id="floatingTextarea" onChange={changetext} style={{ height: "200px", background:props.mode === 'light'?'white':'grey' , color: props.mode === 'light'?'black':'white'}} ></textarea>
          {/* <label htmlFor="floatingTextarea">Comments - {text}</label> */}
        </div>
        <button type="button" className="btn btn-primary mx-3" onClick={handlechangeup}>Convert to uppercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handlechangelo}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={removespaces}>Remove spaces</button>
      </div>
      <div className="container" style={{ height: "200px", background:props.mode === 'light'?'white':'grey' , color: props.mode === 'light'?'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>your text has {text.length} number of characters</p>
        <p>your text has {removespacefun()} number of words</p>

      </div>
    </>
  )
}
