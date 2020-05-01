// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './components/app';
import { MSSProvider } from './utils/mss-context';
import ErrorBoundary from './components/error-components/error-boundary';

// Service
import MSS from './services/media-store-service';

// Store 
import store from './store';

// Defining service for provider
const mss = new MSS();

ReactDOM.render(
  <StoreProvider store = { store }>
    <ErrorBoundary>
      <MSSProvider value={ mss }>
        <Router>
          <App />
        </Router>
      </MSSProvider>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById('root')
);

