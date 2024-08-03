// App.jsx
import React from 'react';
// import Home from './pages/Home/Home';
// import SignIn from './pages/SignIn/SignIn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import Hero from './components/Hero/Hero';
import './assets/css/main.css'; 


const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Footer />
    </div>
  );
};

export default App;


