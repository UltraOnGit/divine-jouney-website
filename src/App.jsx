import { StrictMode, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // world list
  const worldList = ["Vaporwave Station", "...And more?"]

  // coded list
  const worldListItems = worldList.map((world) => <li key={world}>{world}</li>)

  // routes
  // white page error??

  return (
    <div className="app-container">
      <>
      <div className="topBlock">
          <header className="headerImage">
            Divine Journey
          </header>
          <nav>
            <ul className="menu">
              <li><a href="/">Home</a></li>
              <li className="dropdown">
            <a href="/">Features</a>
            <ul className="submenu">
              <li><a href="/">Collectibles</a></li>
              <li><a href="/src/assets/pages/VaporwaveStation.jsx">Weapons</a></li>
              <li><a href="/src/assets/pages/Vaporsteam.jsx">Characters</a></li>
            </ul>
            </li>
              <li><a href="#">About the Creator</a></li>
            </ul>
          </nav>
        </div>
        <div className="mainBlock">
        <h1>Home Page</h1>
        <h2>"Save the Galaxy. Defeat Azal."</h2>
        <p className="glow">
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
        <div>
          <h2>Here are just some of the objects you may find in your journey to stop Azal...</h2>
        </div>
        <div class="parent">
            <div class="div1"><img src="/src/assets/images/AscendancyOrb.png" alt="Ascendancy Orb"/></div>
            <div class="div2"><h3 className="gradient-text">Ascendancy Orb</h3></div>
            <div class="div3">Ascendancy orbs are the main way to traverse worlds in Divine Journey! After
              freeing each celestial, they will give you an Ascendancy Orb as a token of trust, allowing you
              to explore the galaxy further and find more secrets!
            </div>
        </div>
        <div class="parentAlt">
            <div class="div1Alt"><img src="/src/assets/images/CosmaIcon.png" alt="Cosma"/></div>
            <div class="div2Alt"><h3 className="gradient-text-cosma">Cosma</h3></div>
            <div class="div3Alt">Cosma is the common currency of the galaxy, and can be found
              everywhere! Use it to buy skins, abilities, or even upgrade points on your adventure!
            </div>
        </div>
        <div class="parent">
            <div class="div1"><img src="/src/assets/images/EssenceShardIcon.png" alt="Essence Shard"/></div>
            <div class="div2"><h3 className="gradient-text-essenceShard">Essence Shard</h3></div>
            <div class="div3">Essence Shards are the driving power of celestials! Four of them must be collected
              in a world to restore a celestial's power, thus restoring their world to their full potential!
            </div>
        </div>
        <h3>Keep track with us, because there's more to come!</h3>
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

{/*
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.style.display = 'none'; // Close all dropdowns on outside click
  });
});
*/}

export default App
