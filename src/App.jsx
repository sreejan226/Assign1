import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/Clock';
import Forum from './pages/Forum';
import Footer from './components/Footer';
import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import UserAuth from './pages/UserAuth';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CountdownTimer />
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<UserAuth type="sign-in" />} />
        <Route path="/signup" element={<UserAuth type="sign-up" />} />
        <Route path="/editor" element={<Forum />} />
      </Routes>
    </>
  );
}

export default App;