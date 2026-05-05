// functions
import { StrictMode, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import TitleUpdater from './assets/components/TitleUpdater'

// page imports
import Home from './assets/pages/Home'
import Collectibles from './assets/pages/Collectibles'
import Weapons from './assets/pages/Weapons'
import Vaporsteam from './assets/pages/Vaporsteam'
import NotFound from './assets/pages/NotFound'

// element imports
import Header from './assets/layout/Header'
import Footer from './assets/layout/Footer'
import Navbar from './assets/layout/Navbar'

// import styles
import './App.css'

// app runner
const App = () => {

  // app name
  const appName = "Divine Journey";

  // routes
  const routeData = [
    { path: '/', element: <Home />, title: 'Home | Divine Journey'},
    { path: '/Collectibles', element: <Collectibles />, title: 'Collectibles | Divine Journey'},
    { path: '/Weapons', element: <Weapons />, title: 'Weapons | Divine Journey'},
    { path: '/Vaporsteam', element: <Vaporsteam />, title: 'Vaporsteam | Divine Journey'},
    { path: '/*', element: <NotFound />, title: 'Page Not Found'}
  ]

  // return page
  return (
      <div className="app-container">
        <div className="topBlock">
          <Header />
            <Navbar />
        </div>
            <main className="main-content">
              <Routes>
                {routeData.map(({ path, element, title }) => (
                  <Route 
                    key={path}
                    path={path}
                    element={
                      <TitleUpdater title={title}>
                        {element}
                      </TitleUpdater>                      
                    } 
                  />
                ))}
              </Routes>
            </main>

        <Footer text={appName} />
      </div>
  )
}

// dropdown menu
document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', event => {
    const submenu = item.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation(); // Prevents closing when clicking inside
  });
});

{/*
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none'; // Close all dropdowns on outside click
  });
});
*/}

export default App
