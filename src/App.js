
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#151831';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "MyApp - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }


  return (
    <>
      <Router>
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try MyApp Word counter, character counter, Remove extra spaces" mode={mode} />
          </Route>
        </Switch> 
        
      </div>
      </Router>
    </>

  );
}

export default App;
