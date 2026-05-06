import './Collectibles.css'
import React from "react";

const Collectibles = () => {
    return (
        <div className="mainBlock">
            <h1>Collectibles</h1>
            <p className="glow">
            Seek valuable resources on your journey!
            </p>

             <div className="parent">
              <div className="div1"><img src="/src/assets/images/AscendancyOrb.png" alt="Ascendancy Orb"/></div>
              <div className="div2"><h3 className="gradient-text">Ascendancy Orb</h3></div>
              <div className="div3">Ascendancy orbs are the main way to traverse worlds in Divine Journey! After
                freeing each celestial, they will give you an Ascendancy Orb as a token of trust, allowing you
                to explore the galaxy further and find more secrets!
              </div>
          </div>
        </div>
    );

}

export default Collectibles
