import "./manager.css"
import {World} from "./world"
import {Services} from "./Services"
import { useState } from "react"

type ManagerProps = {
    world : World 
    services : Services
    showManagers : Function
}

export default function Manager({world, services,showManagers}: ManagerProps){



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
 <div className="managername"> {manager.name} </div>
 <div className="managercible"> {world.products.product[manager.idcible-1].name} </div>
 <div className="managercost"> { manager.seuil} </div>
 </div>
 <div /*onClick={() => manager.hireManager(manager)}*/>
 <button disabled={world.money < manager.seuil}> Hire !</button>
 </div>
 </div>
)
 }

 </div>
</div>

</div>

    )


}

