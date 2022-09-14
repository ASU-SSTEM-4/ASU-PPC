import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Public/Login/Login";
import Form from "./Pages/Private/Form/Form";
import Preview from "./Pages/Private/Preview/Preview";
import Home from "./Pages/Public/Home/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>
      <Route path='/Preview' element={<Preview/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
