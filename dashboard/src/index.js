import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense(process.env.REACT_APP_SYNCFUSION_API);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider >
        <App />
    </ContextProvider>
);