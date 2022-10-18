import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {FavoriteContextProvider} from './store/favorites-context';
import { AuthContextProvider } from './store/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FavoriteContextProvider>
<BrowserRouter>
<AuthContextProvider>
    <App />
</AuthContextProvider>
</BrowserRouter>
</FavoriteContextProvider>);  

