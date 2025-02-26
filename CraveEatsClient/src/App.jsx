
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Slider from 'react-slick';

//HOC
import HomeLayoutHoc from './HOC/Home.HOC';
import RestaurantLayoutHoc from './HOC/Restaurant.HOC';


// Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
      </Routes>
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc path="/restaurant/:id" exact component={RestaurantPage} />


    </>
  )
}

export default App
