
import './App.css';
import { Routes } from "react-router-dom";

//HOC
import HomeLayoutHoc from './HOC/Home.hoc';

// Pages
import HomePage from "./pages/HomePage";

function App() {


  return (
    <>

      <HomeLayoutHoc component={HomePage} path="/" />
      <HomeLayoutHoc component={HomePage} path="/:type" />

    </>
  )
}

export default App
