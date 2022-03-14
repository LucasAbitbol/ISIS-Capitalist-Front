import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Services from "./Services";
import {World, Product, Pallier} from './world';
import ProductComponent from './Product';
import { transform } from './utils';
import Manager from './Manager';
import Angelupgrade from './Angelsupgrades';
import AngelsUpgrades from './Angelsupgrades';
import CashUpgrades from './CashUpgrades';
import Investor from './Investor';
import Badge from '@mui/material/Badge';
import ManagerComponent from './Manager';

function App() {
  const [services, setServices] = useState(new Services(""))
  const [world, setWorld] = useState(new World())
  const [qtmulti,setqtmulti] = useState(1)
  const [window,setWindow] = useState(false)
  const [windowange,setWindowange] = useState(false)
  const [windowup,setWindowup] = useState(false)
  const [windowinv,setWindoinv] = useState(false)
  const [pallier, setPallier]= useState(new Pallier())
  const [managers,setManagers]= useState(0)
  const [username, setUsername] = useState("")
  var name = "Wass"


  useEffect(() => {
    let services = new Services("")
    setServices(services)
    services.getWorld().then(response => {
    setWorld(response.data)
    }
    )
}, [])


// useEffect(() => {
//   if (username !== "") {
//   let services = new Services(username)
//   setServices(services)
//   services.getWorld().then(response => {
//   let liste = compute_unlocks_list(response.data)
//   setWorld(response.data)
//   setUnlockList(liste)
//   }
//   )
//   }
//  }, [username])
//  useEffect(() => {
//   let username = localStorage.getItem("username");
//   // si pas de username, on génère un username aléatoire
//   if (!username || username === "") {
//   username = "" + Math.floor(Math.random() * 10000);
//   }
//   localStorage.setItem("username", username);
//   setUsername(username)
//  }, [])



function onProductionDone(p: Product): void {
  // calcul de la somme obtenue par la production du produit
  let gain = p.revenu
  // ajout de la somme à l’argent possédé
  addToScore(gain)
 }
 
function showManagers(){
  if (window ==false){
    setWindow(true)
    setWindowange(false)
    setWindowup(false)
    setWindoinv(false)
  }
  else {
    setWindow(false)
   
  }
} 

function showInvestor(){
  if (windowinv ==false){
    setWindoinv(true)
    setWindowange(false)
    setWindowup(false)
    setWindow(false)
  }
  else {
    setWindoinv(false)
   
  }
} 

// function onUserNameChanged(){
//   let username = localStorage.getItem("username");
//   localStorage.setItem("username", username);
// }

function showAngels(){
  if (windowange ==false){
    setWindowange(true)
    setWindow(false)
    setWindowup(false)
    setWindoinv(false)
  }
  else {
    setWindowange(false)
   
  }
} 

function showUpgrades(){
  if (windowup ==false){
    setWindowup(true)
    setWindow(false)
    setWindowange(false)
    setWindoinv(false)
  }
  else {
    setWindowup(false)
   
  }
}

 function addToScore(gain: number){
   world.score += gain
 }

 function  onManagerBuy(seuil:number, manager:Pallier):void{
  updateMoney(-seuil)
  services.putManager(manager)
}

function updateMoney(gain:number){
  /// Met à jour l'argent du joueur de manière positive (revenu gain positif) ou négative (achat gain négatif)
  setWorld(world => ({...world, money:world.money + gain}))
}

 function multiplicateur(){
  let btn = document.getElementById('mult')
  if(btn){
   if (qtmulti == 1){
    btn.textContent = "x10"
     setqtmulti(10)
   
   }
   else if (qtmulti==10){
    btn.textContent = "x100"
     setqtmulti(100)
   
   }
   else if (qtmulti==100){
    btn.textContent = "xMax"
    setqtmulti(2)
    
  }
  else if (qtmulti==2){
    btn.textContent = "x1"
    setqtmulti(1)
    
  }
}
 
}

  return (
    <div className="App">
      <img className='logomonde' src={services.server + world.logo} />
      <div className="header"> 
      <span> {world.name} </span>
      <div className="argent">
      <span>Budget : </span><span dangerouslySetInnerHTML={{__html: transform(world.money)}}></span><span>$</span>
      </div>
        <div><button id='mult' className='multi' onClick={multiplicateur}>x{qtmulti}</button> </div>
        <div> {username} </div>
      </div>

      <div className="main">
        <div className='menu'> 
          <ul> <button className='multi' onClick={showUpgrades}>Cash Upgrades</button> </ul>
          <ul><Badge badgeContent={3} color="primary"><button className='multi' onClick={showManagers}> Managers</button></Badge> </ul>
          <ul><button className='multi' onClick={showAngels}> Angel Upgrades</button> </ul>
          <ul><button className='multi' onClick={showInvestor}> Investors</button></ul>
           </div>
        <div className="product">
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[0]} services={ services } cash={world.money}/> 
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[1]} services={ services } cash={world.money}/>
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[2]} services={ services } cash={world.money}/> 
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[3]} services={ services } cash={world.money}/> 
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[4]} services={ services } cash={world.money}/> 
      <ProductComponent world={world} onProductionDone={onProductionDone} qtmulti={qtmulti} prod={ world.products.product[5]} services={ services } cash={world.money}/> 
    </div>
    { window &&
    <div className='manageurs'>
      <ManagerComponent manager={pallier} world={world} services={ services } showManagers={showManagers} onManagerBuy={onManagerBuy}/>
    </div>
}

{
  windowange &&
  <AngelsUpgrades world={world} services={ services } showAngels={showAngels} pallier={pallier}/>
}

{
  windowup &&
  <CashUpgrades world={world} services={ services } showUpgrades={showUpgrades} pallier={pallier}/>
}

{ windowinv &&
  
      <Investor world={world} services={ services } showInvestor={showInvestor} pallier={pallier}/>
}
        </div>
    </div>
  );
}

export default App;
