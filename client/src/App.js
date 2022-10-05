import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Public/Login/Login";
import Form from "./Pages/Private/Form/Form";
import Preview from "./Pages/Private/Preview/Preview";
import Home from "./Pages/Public/Home/Home";
import './App.css';
import Contact from "./Pages/Public/Contact/Contact";
import About from "./Pages/Public/About/About";
import Template from "./Pages/Public/Template/Template";
import Mission from "./Pages/Public/Mission/Mission";

function App() {

  const [msg, setMsg] = useState("");

  onclick = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from MongoDB: " + data.Name);
        setMsg(data.Name);
      });
  }

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>
      <Route path='/Preview' element={<Preview/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Templates' element={<Template/>}></Route>
      <Route path='/Mission' element={<Mission/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
