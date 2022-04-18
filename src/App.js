import{useState,useEffect} from 'react'
import {Routes,Route} from "react-router-dom"
import {HomePage} from "./pages/homePage/homePage"
import {HatsPage} from "./pages/hatsPage/hatsPage"
import { Header } from "./components/header/header";
import {Auth} from "./pages/sign-in-and-signup/sign-in-and-singup";
import {auth} from "./firebase/firebase.utils"
import{userAction} from './actions/userAction'
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const[currentUser,setCurrentUser] =useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setCurrentUser(dispatch(userAction(user)))
      console.log(user);
    })
      
  },[])

  

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/hatsPage" element  ={<HatsPage/>}/>
        <Route path="/signin" element  ={<Auth/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
