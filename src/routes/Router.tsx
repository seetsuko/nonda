import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../user/Login';
import { SignUp } from '../user/SignUp';
import { UserEdit } from '../user/UserEdit';
import { Counter } from '../pages/Counter';

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<UserEdit />} />
      <Route path="/" element={<Counter />} />
    </Routes>
  );
};