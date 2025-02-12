import ReactDOM from 'react-dom/client';
// import { createBrowserRouter } from 'react-router-dom';


import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavTabs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// const router = createBrowserRouter([
//     {
//     path: '/',
//     element: <App />,
//     errorPage: <errorPage />,
//     children: [

//     ]
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(<App />);