import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Find from './components/Find';
import Types from './components/Types';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/types" element={<Types />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
