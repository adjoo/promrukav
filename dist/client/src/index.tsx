import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {actions, AppStateInterface, store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const rerender = (state: AppStateInterface ) => {
    root.render(
        <React.StrictMode>
            <App {...state} />
        </React.StrictMode>
    );
}
rerender(store._state)

store.subscribe(rerender)
