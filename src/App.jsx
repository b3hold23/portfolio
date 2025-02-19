import { Outlet } from 'react-router-dom';

import './App.css';
import NavBar from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
