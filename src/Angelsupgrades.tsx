import Services from "./Services"
import { Pallier, World } from "./world"
import "./angelsupgrade.css"


type AngelsUpgradesProps = {
    world : World 
    services : Services
    showAngels : Function
    pallier : Pallier
}

export default function AngelsUpgrades({world, services,showAngels,pallier}: AngelsUpgradesProps){


    function buyAngelUpgrade() : void{
    
    }
    
    return (
        
        <div>
            <div className="modal">  
            <h1> Achète tes upgrades avec tes anges ! </h1>
        <div>Anges possédés : {world.activeangels}</div>

        <div> { world.angelupgrades.pallier.filter(pallierAnge => !pallierAnge.unlocked).map(pallierAnge =>
        <div key={pallier.idcible} className="managergrid">
        
    <div className="logo">
        <img alt="upgradeslogo" className="round" src= {services.server + pallierAnge.logo}/>

    </div>
    <div className="infosmanager">
         <div className="managername"> {pallierAnge.name} </div>
         <div className="managercost"> {pallierAnge.seuil} Anges</div>
    </div>
    <div onClick={() => buyAngelUpgrade}>
        <button className='hire' disabled={world.money < pallierAnge.seuil}> ACHETER </button>
    </div>
 </div>
)
}
</div>
 </div>





            </div>
        
            )
        
        
        }
        