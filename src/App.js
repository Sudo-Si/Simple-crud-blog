// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Switch, Route, Link}from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePosts from './pages/CreatePosts';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from "./firbase-config"
// import StyledNavbar from "./StyledNavbar"

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  const signUseOut =()=>{
signOut(auth).then (()=>{
  // localStorage.setItem("isAuth",false);
  localStorage.clear();
  setIsAuth(false);
  window.location.pathname ="/login";
})
  }
  return (
  <Router>
  <nav className='nav'>
        <Link to="/">Home </Link>
        
      {!isAuth ? <Link to="/login">Login </Link>:<>   <Link to="/create-post">Spin a Yarn </Link>
        <button onClick={signUseOut}>Logout</button></>
   
        
        }
      </nav>
       <Routes>
      <Route path='/' element={<Home isAuth={isAuth} />}/>
      <Route path='/create-post' element={<CreatePosts isAuth={isAuth} />}/>
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />}/>
    </Routes>
    </Router>
   
  
  );
}

export default App;
