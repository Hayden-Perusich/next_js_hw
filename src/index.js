import React from 'react';
import ReactDOM from 'react-dom/client'; 
import APP from './components/APP';
import './components/styles/global.css';

const reactContentRoot = document.getElementById('root');

const root = ReactDOM.createRoot(reactContentRoot); 
root.render(<APP />); 
