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
          <Route path="/spaceapp-challenge" element={<Home />} />
          <Route path="/spaceapp-challenge/find" element={<Find />} />
          <Route path="/spaceapp-challenge/types" element={<Types />} />
          <Route path="/spaceapp-challenge/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
