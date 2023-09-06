import React from 'react';
import ReactDOM from 'react-dom/client';
// import './utils/style/index.css';

import GlobalStyle from './utils/style/GlobalStyle';
import KasaRouter from './components/Router'


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
      <KasaRouter/>
  </React.StrictMode>
  );
  
