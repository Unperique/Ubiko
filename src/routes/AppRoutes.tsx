import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Businesses from '../pages/Businesses';
import BusinessDetails from '../pages/BusinessDetails';
import Categories from '../pages/Categories';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/businesses" element={<Businesses />} />
    <Route path="/businesses/:id" element={<BusinessDetails />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;