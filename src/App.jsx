import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Notes from './pages/Notes';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
