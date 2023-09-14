import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
//import { RouterList } from './routes/RouterList';
import { RouterPage} from './routes/RouterPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterPage/>
  </React.StrictMode>
);