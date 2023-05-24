import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom'
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700&family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
    	<App />
	</BrowserRouter>
);
