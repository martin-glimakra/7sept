import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Booking from './pages/Booking'
import Terms from './pages/Terms'
import Start from './pages/Start'
import TestDb from './pages/TestDb';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="bokning" element={<Booking />} />
            <Route path="vilkor" element={<Terms />} />
            <Route path="db" element={<TestDb />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
