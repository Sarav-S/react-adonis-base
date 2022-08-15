import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';
import { store } from './store'
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';

import GuestRoute from './components/GuestRoute';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <SegregatedRoutes />
            </div>
        </Provider>
    );
}

function SegregatedRoutes () {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<GuestRoute redirectPath="/dashboard" />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute redirectPath="/login" />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </>
}

export default App;
