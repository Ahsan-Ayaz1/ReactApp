import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const changeMode = () => {
    if (mode === 'light') {
      setmode('dark')
      setText('Enable Light Mode')
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been enabled', 'success')
    }
    else {
      setmode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success')
    }

  }
  return (
    <>
      <Router>
        <Navbar title='React' about="About Me" mode={mode} text={text} toggle={changeMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path='/about' element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter Text To Analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
