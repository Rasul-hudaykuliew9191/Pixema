import ReactDOM from 'react-dom/client';
import { AppProvider } from './Context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './ReduxStore/favorities/reducer';
import { Provider } from 'react-redux';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AppProvider>
  </Provider>
  
);


