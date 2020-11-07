// import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-dom'
import { ThemeProvider, CSSReset, Button, Stack, InputGroup, InputLeftAddon, InputRightAddon, Input, handleClick, show, PseudoBox,Heading, Box, Text, Link } from "@chakra-ui/core"
// import './components/signup.js';
// import Signup from './components/signup.jsx';
import Header from './components/header';
import LoginForm from './components/LoginForm';
import Signup from './components/signup';
import ColorModeExample from './components/toggle';

function App() {
  

  return (
    <div className="App">
      <ThemeProvider>
        <CSSReset />
       <Header></Header><br /><br /><br />
       <LoginForm></LoginForm>
       {/* <ColorModeExample></ColorModeExample> */}
      </ThemeProvider>

      
    </div>
  );
}

export default App;
