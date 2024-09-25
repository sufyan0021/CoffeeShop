import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Visit from './pages/Visit';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css'

const App = () => {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Header />
      <main>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>

      </main>
      <Footer />
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;