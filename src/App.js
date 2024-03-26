import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Offers from './Pages/Offers';
import Credit from './Pages/Credit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/credit" element={<Credit />}/>
      </Routes>
    </Router>
  );
}

export default App;
