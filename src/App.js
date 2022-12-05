import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LandingPage from './Components/LandingPage/LandingPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<HomePage title='Featured'/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
