
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Slider from 'react-slick';
import React, { useEffect } from "react";

//HOC
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.HOC';
import CheckoutLayoutHoc from './HOC/Checkout.HOC';


// Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import CheckoutPage from './pages/CheckOutPage';
import GoogleAuth from "./pages/googleAuthPage";


// Components
import Overview from './components/Restaurant/OverView.component';
import OrderOnline from './components/Restaurant/OrderOnline.component';
import Reviews from './components/Restaurant/Reviews/Reviews.component';
import Menu from './components/Restaurant/Menu/Menu.component';
import Photos from './components/Restaurant/Photos/Photos.component';


// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/User/user.action";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage]);



  return (
    <>
      {/* <HomeLayoutHoc path="/:type" exact component={HomePage} /> */}
      {/* Home page routes with HomeLayoutHoc */}

      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<HomeLayoutHoc component={HomePage} />} />
        <Route path="//google/:token" element={<HomeLayoutHoc component={GoogleAuth} />} />
        {/* Restaurant page with RestaurantLayoutHoc */}

        <Route path="/restaurant/:id/*" element={<RestaurantLayoutHoc><RestaurantPage /></RestaurantLayoutHoc>}>

          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="/checkout/orders" element={<CheckoutLayoutHoc component={CheckoutPage} />} />
      </Routes>

      {/* <RestaurantLayoutHoc path="/restaurant/:id" exact component={RestaurantPage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id/overview"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/menu"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={HomePage}
      /> */}


    </>
  )
}

export default App
