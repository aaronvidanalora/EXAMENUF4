import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';
import { GlobalProvider } from './context/GlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GlobalProvider> 
      <App />
     </GlobalProvider> 
  </React.StrictMode>,
);
