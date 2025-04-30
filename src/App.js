import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UpperNavbar from "./components/UpperNavbar";
import './App.css'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="image_section">
         <UpperNavbar/>
         <Home/>
         <Footer/> 
      </div>   
    </div>
  );
}

export default App;
