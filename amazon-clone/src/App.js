import React from "react"
import './style/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
