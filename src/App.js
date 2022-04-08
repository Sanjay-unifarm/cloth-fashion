import {Routes,Route} from "react-router-dom"
import {HomePage} from "./pages/homePage/homePage"
import {HatsPage} from "./pages/hatsPage/hatsPage"
import { Header } from "./components/header/header";
import {Auth} from "./pages/sign-in-and-signup/sign-in-and-singup"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/hatsPage" element  ={<HatsPage/>}/>
        <Route path="/signin" element  ={<Auth/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
