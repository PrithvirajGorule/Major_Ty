
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

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
        
        <Route
            path="/signin"
            element={<Signin />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
