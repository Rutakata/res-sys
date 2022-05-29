import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppContainer from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<AppContainer/>);

reportWebVitals();
