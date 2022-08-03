import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Component/Countries';
import Details from './Component/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
