import { useState } from "react"
import { Services } from "./Services"
import { Pallier, Product, World } from "./world"
import "./manager.css"


type UnlocksProps = {
    world : World
    prod : Product 
    services : Services
    showUnlocks(): void
}

export default function Unlocks({world,prod, services, showUnlocks}: UnlocksProps){


    return (

<div className="modal">
    {prod.palliers.pallier.map( unlock =>
        <div key={unlock.idcible} className="unlo">
            <div className="infosmanager">
                <div className="managername"> { unlock.name} </div>
                <img alt="managerlogo" className="round2" src= {services.server + unlock.logo} />
                <div className="managercost"> { unlock.seuil} </div>
                <div className="managercible"> {world.products.product[unlock.idcible-1].name} </div>
            </div>
        </div>)
    }
    </div>
    )
}


