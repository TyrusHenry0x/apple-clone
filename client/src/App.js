import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
