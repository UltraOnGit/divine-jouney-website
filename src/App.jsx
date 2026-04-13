import { StrictMode, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

const worldList = ["Vaporwave Station", "...And more?"]

const worldListItems = worldList.map((world) => <li key={world}>{world}</li>)

  return (
    <div className="app-container">
      <>
      <div className="topBlock">
          <header className="headerImage">
            Divine Journey
          </header>
          <nav>
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li className="dropdown">
            <a href="#">Features</a>
            <ul className="submenu">
              <li><a href="#">Collectibles</a></li>
              <li><a href="#">Weapons</a></li>
              <li><a href="Vaporsteam.jsx">Characters</a></li>
            </ul>
            </li>
              <li><a href="#">About the Creator</a></li>
            </ul>
          </nav>
        </div>
        <div className="mainBlock">
        <h1>Home Page</h1>
        <p className="read-the-docs">
          Coming out soon!
        </p>
        <p>
          Divine Journey is a 3D Collectathon platformer, taking place beyond the edges of space!
          Go through 10 diverse worlds, collecting Essence Shards, Ascendancy Orbs, and more as you
          tread on a perilous journey to defeat Azal, Destroyer of Galaxies!
        </p>
        <div className="listDiv">
          <h2>Worlds</h2>
          <ul className='vaporwaveStyle'>{worldListItems}</ul>
        </div>
        <img src="/src/assets/images/AscendancyOrb.png" alt="Ascendancy Orb" id='leftSpaced'/>
        <h1 className="gradient-text" id="rightSpaced">Testing testing 123</h1>
        </div>
      </>
    </div>
  )
}

document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', event => {
    const submenu = item.querySelector('.submenu');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation(); // Prevents closing when clicking inside
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none'; // Close all dropdowns on outside click
  });
});

export default App
