import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import {GlobalStyles} from "./components/App/GlobalStyles"
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
         <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
     </PersistGate>
    </Provider>
  </React.StrictMode>
);
