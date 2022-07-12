import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
const pages = Array.from(Array(43).keys());
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App pageId={1} />} />
            {pages.map((page) => (
                <Route path={`/${page}`} element={<App pageId={page} />} />))}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
