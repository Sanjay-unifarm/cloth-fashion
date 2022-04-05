import {Routes,Route} from "react-router-dom"
import {HomePage} from "./pages/homePage/homePage"
import {HatsPage} from "./pages/hatsPage/hatsPage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="/hatsPage" element  ={<HatsPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
