
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Offers from './Pages/Offers';
import ListYourShow from './Pages/ListYourShow';
import Credit from './Pages/Credit'
import GiftCard from './Pages/GiftCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/ListYourShow" element={<ListYourShow />} />
        <Route path="/offers/credit" element={<Credit />}/>
        <Route path="/GiftCard" element={<GiftCard />}/>
      </Routes>
    </Router>
  );
}

export default App;
