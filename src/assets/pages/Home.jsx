import './Home.css'
import React from "react";

const Home = () => {

    // world list
  const worldList = ["Vaporwave Station", "...And more?"]

  // coded list
  const worldListItems = worldList.map((world) => <li key={world}>{world}</li>)

  
    return (
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
          <div className="parent">
              <div className="div1"><img src="/src/assets/images/AscendancyOrb.png" alt="Ascendancy Orb"/></div>
              <div className="div2"><h3 className="gradient-text">Ascendancy Orb</h3></div>
              <div className="div3">Ascendancy orbs are the main way to traverse worlds in Divine Journey! After
                freeing each celestial, they will give you an Ascendancy Orb as a token of trust, allowing you
                to explore the galaxy further and find more secrets!
              </div>
          </div>
          <div className="parentAlt">
              <div className="div1Alt"><img src="/src/assets/images/CosmaIcon.png" alt="Cosma"/></div>
              <div className="div2Alt"><h3 className="gradient-text-cosma">Cosma</h3></div>
              <div className="div3Alt">Cosma is the common currency of the galaxy, and can be found
                everywhere! Use it to buy skins, abilities, or even upgrade points on your adventure!
              </div>
          </div>
          <div className="parent">
              <div className="div1"><img src="/src/assets/images/EssenceShardIcon.png" alt="Essence Shard"/></div>
              <div className="div2"><h3 className="gradient-text-essenceShard">Essence Shard</h3></div>
              <div className="div3">Essence Shards are the driving power of celestials! Four of them must be collected
                in a world to restore a celestial's power, thus restoring their world to their full potential!
              </div>
          </div>
          <h3>Keep track with us, because there's more to come!</h3>
        </div>
    );

}

export default Home
