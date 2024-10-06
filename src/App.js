import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Find from './components/Find';
import Types from './components/Types';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/exoedu" element={<Home />} />
          <Route path="/exoedu/find" element={<Find />} />
          <Route path="/exoedu/types" element={<Types />} />
          <Route path="/exoedu/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
