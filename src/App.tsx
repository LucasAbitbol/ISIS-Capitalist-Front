import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Services from "./Services";
import {World, Product} from './world';
import ProductComponent from './Product';
import { transform } from './utils';

function App() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  const [qtmulti,setqtmulti] = useState("1")


  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
}, [])

function onProductionDone(p: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain = p.revenu
  // ajout de la somme à l’argent possédé
  addToScore(gain)
 }
 
 function addToScore(gain: number){
   world.score += gain
 }

 function multiplicateur(){

   if (qtmulti == "1"){
     setqtmulti("10")
   
   }
   else if (qtmulti=="10"){
     setqtmulti("100");
   
   }
   else if (qtmulti=="100"){
    setqtmulti("Max")
    
  }
  else if (qtmulti=="Max"){
    setqtmulti("1")
    
  }
 
}

  return (
    <div className="App">
      <img className='logomonde' src={services.server + world.logo} />
      <div className="header"> 
      <span> {world.name} </span>
      <div className="argent">
      <span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span>
      </div>
        <div><button className='multi' onClick={multiplicateur}>x{qtmulti}</button> </div> 
        <div> ID du joueur </div>
      </div>

      <div className="main">
        <div className='menu'> 
          <ul> <button className='multi'>Cash Upgrades</button> </ul>
          <ul><button className='multi'> Managers</button> </ul>
          <ul><button className='multi'> Angel Upgrades</button> </ul>
          <ul><button className='multi'> Investors</button></ul>
           </div>
        <div className="product">
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[0]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[1]} services={ services }/>
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[2]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[3]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[4]} services={ services }/> 
      <ProductComponent onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[5]} services={ services }/> 
    </div>
        </div>
    </div>
  );
}

export default App;
