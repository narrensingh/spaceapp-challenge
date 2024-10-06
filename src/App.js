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
      <Router basename="/spaceapp-challenge">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/types" element={<Types />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
