import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Pass isAuthenticated and setIsAuthenticated as props to Signup */}
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
