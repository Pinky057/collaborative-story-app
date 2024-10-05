import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Story from './pages/Story';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/story/:id" element={<Story />} />
            </Routes>
        </Router>
    );
}

export default App;
