import Navbar from "./components/navbar"
import Counter from './components/counter.js'
import Clock from './components/clock.js'
import Problem1 from './components/problem1.js'
import Loginout from './components/loginout.js'
import List from './components/list.js'
import TextForm from "./components/TextForm.js"
import About from "./components/About.js"
import React, { useState } from 'react'
import Alert from "./components/Alert.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  let changetheme = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showalert("dark mode is enabled", "success")
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("dark mode is disabled", "success")
    }
  }


  return (
    <>
      <Router>
      <Navbar mode={mode} changetheme={changetheme} />
      <Alert alert={alert} />
      {/* <Counter /> */}
      {/* <Clock /> */}
      {/* <Problem1 /> */}
      {/* <Loginout /> */}
      {/* <List /> */}
      {/* <About/> */}
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm mode={mode} showalert={showalert} />} />
      </Routes>
        
      </Router>
    </>
  );
}

export default App;
