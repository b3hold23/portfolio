import { Outlet } from 'react-router-dom';

import './App.css';
import NavBar from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
