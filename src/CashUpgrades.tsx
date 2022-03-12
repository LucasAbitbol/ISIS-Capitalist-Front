import "./manager.css"
import {Pallier, World} from "./world"
import {Services} from "./Services"
import { useState } from "react"

type CashUpgradesProps = {
    world : World 
    services : Services
    showUpgrades : Function
    pallier : Pallier
}

export default function CashUpgrades({world, services,showUpgrades,pallier}: CashUpgradesProps){
    
return(

<div>
    <div className="modal">
        <div> <h1 className="title">Améliorez vos recrutements !</h1> </div>
        <div> {world.upgrades.pallier.filter( pallier => !pallier.unlocked).map(pallier =>
 <div key={pallier.idcible} className="managergrid">
        
    <div className="logo">
        <img alt="managerlogo" className="round" src= {services.server + pallier.logo}/>
    </div>
    <div className="infosmanger">
         <div className="managername"> {pallier.name} </div>
         <div className="managercost"> { pallier.seuil} $</div>
    </div>
    <div>
        <button className='hire' disabled={world.money < pallier.seuil}> Investir ! </button>
    </div>
 </div>
)}
</div>
</div>
 </div>
    )
}