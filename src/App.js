import './styles/App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Commissions from './pages/Commissions';
import NavBar from './navigation/NavBar';
import { Container, Row } from 'react-bootstrap';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Container fluid  className="d-flex flex-column min-vh-100">
        <Row>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/commissions" element={<Commissions />} />
          </Routes>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
