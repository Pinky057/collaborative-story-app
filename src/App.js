import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import StoryView from './components/StoryView';
import './styles/styles.css';  // Import the styles

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/upload">Upload</Link>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/stories" element={<StoryView />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
