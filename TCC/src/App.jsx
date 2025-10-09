import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/home';
import RobloxPage from './pages/RobloxPage';
import GodotPage from './pages/GodotPage';
import UnityPage from './pages/UnityPage';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-secondary text-white">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roblox" element={<RobloxPage />} />
            <Route path="/godot" element={<GodotPage />} />
            <Route path="/unity" element={<UnityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;