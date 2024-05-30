import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap aquí
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalProvider> */}
      <App />
    {/* </GlobalProvider> */}
  </React.StrictMode>,
);
