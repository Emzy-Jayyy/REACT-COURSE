import { createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
 } from 'react-router-dom';
// import { useState } from 'react'
import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import './App.css'
import RootLayout from './layout/RootLayout';
import ServicesDetails from './Components/Services/ServicesDetails';
import ServicesLayout from './layout/ServicesLayout';


function App() {
  const routes = createRoutesFromElements(
    <Route path='/' element = {<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<ServicesLayout/>}>
        <Route path=':Services' element={<ServicesDetails/>}></Route>
      </Route>
    </Route>
  );

  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  )
}

export default App
