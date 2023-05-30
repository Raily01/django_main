import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DishsListView from "./components/Bakery";
import DishCreateView from "./components/DishCreateView";
import DishsDetailView from "./components/DishsDetailView";
import DishsListViewAll from "./components/AllItems";
import Ligin from "./components/Login";
import Register from "./components/Register";
import Header from './components/Header';
import ContactsPage from './components/Contacts';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/dish/create/" element={<DishCreateView />}></Route>
          <Route path="/dish/detail/:pk" element={<DishsDetailView />}></Route>
          <Route path="/all" element={<DishsListViewAll />}></Route>
          <Route path="/login" element={<Ligin />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<ContactsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          {/* <Route path="/payment" element={<PaymentPage />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
