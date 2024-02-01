
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdminPage from './pages/AdminPage';

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
        

        <Route
            path="/admin"
            element={<AdminPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
