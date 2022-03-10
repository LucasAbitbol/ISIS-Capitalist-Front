import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Services from "./Services";
import {World} from './world';
import ProductComponent from './Product';
import { transform } from './utils';

function App() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
}, [])
  return (
    <div className="App">
      <img src={services.server + world.logo} />
      <div className="header"> 
      <span> {world.name} </span>
      <div className="argent">
      <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
      </div>
        <div> multiplicateur </div> 
        <div> ID du joueur </div>
      </div>
      <div className="main">
        <div> liste des boutons de menu </div>
        <div className="product">
      <ProductComponent prod={ world.products.product[0]} services={ services }/> 
      <ProductComponent prod={ world.products.product[1]} services={ services }/>
      <ProductComponent prod={ world.products.product[2]} services={ services }/> 
      <ProductComponent prod={ world.products.product[3]} services={ services }/> 
      <ProductComponent prod={ world.products.product[4]} services={ services }/> 
      <ProductComponent prod={ world.products.product[5]} services={ services }/> 
    </div>
        </div>
    </div>
  );
}

export default App;
