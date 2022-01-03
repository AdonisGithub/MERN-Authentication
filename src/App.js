import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './page/home';
import Signup from './page/signup';
import Login from "./page/login";
import ForgotPassword from './page/forgotpassword';

function App() {
  return (

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default App;
