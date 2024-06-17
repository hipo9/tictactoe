import React from 'react';
import ReactDom, { createRoot } from 'react-dom/client';
import { AppTicTac } from './src/AppTicTac';
import './src/styles.css';

ReactDom.createRoot(document.getElementById('root')).render(<AppTicTac />);
