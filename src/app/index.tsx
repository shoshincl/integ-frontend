import './main.css';
import '../i18n';

import { HelmetProvider } from 'react-helmet-async';

import Router from '../routes';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
