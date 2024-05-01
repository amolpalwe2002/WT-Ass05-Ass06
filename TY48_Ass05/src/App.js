import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MarksForm from './MarksForm';
import Result from './Result';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/form" element={<MarksForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
