import "./manager.css"
import {Pallier, World} from "./world"
import {Services} from "./Services"
import { useState } from "react"

type ManagerProps = {
    manager: Pallier
    services: Services
    world: World
    showManagers : Function 
    onManagerBuy: (seuil:number, manager:Pallier) => void
}


export default function Manager({ manager,services, world,showManagers, onManagerBuy}:ManagerProps): JSX.Element{
    const [dispo,setDispo] = useState(false)

    
    function hireManager(){
        if (world.money>=manager.seuil){
            // On transmet l'info à l'app
            onManagerBuy(manager.seuil, manager)
            // On désaffiche le manager
            manager.unlocked = true
            // On prévient le produit concerné
            let product = world.products.product.find(produit => produit.id == manager.idcible)
            // @ts-ignore
            console.log(product.name)
            // @ts-ignore
            product.managerUnlocked = true
        }
    }

    
    return (
        
<div>

<div className="modal">
 <div> <h1 className="title">Recrute des coachs !</h1> </div>
 <div> {world.managers.pallier.filter( manager => !manager.unlocked).map(manager =>
 
 <div key={manager.idcible} className="managergrid">
 <div>
 <div className="logo">
 <img alt="managerlogo" className="round" src= {
services.server + manager.logo} />
 </div>
 </div> 
 <div className="infosmanager">
 <div className="managername"> Nom complet : {manager.name} + {manager.unlocked} </div>
 <div className="managercible"> Spécialité : Il recrute automatiquement les {world.products.product[manager.idcible-1].name} </div>
 <div className="managercost"> Prix de recrutement : { manager.seuil} $</div>
 </div> 
 <div>

 <button disabled={world.money<manager.seuil} className="hire" onClick={hireManager}><span>Recruter !</span></button>

 </div>


 </div>
 )

 }

 </div>
</div>

</div>

    )


}

