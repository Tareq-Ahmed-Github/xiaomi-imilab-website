import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Dashboard from './components/Dashboard';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
