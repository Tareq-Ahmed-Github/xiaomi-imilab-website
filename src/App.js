import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Dashboard from './components/Dashboard';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
