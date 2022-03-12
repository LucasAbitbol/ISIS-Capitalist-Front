import Services from "./Services"
import { Pallier, World } from "./world"
import "./investor.css"


type InvestorProps = {
    world : World 
    services : Services
    showInvestor : Function
    pallier : Pallier
}

export default function Investor({world, services,showInvestor,pallier}: InvestorProps){


    const availableAngels = Math.floor(150 * Math.sqrt(world.score/Math.pow(10,15)) - world.totalangels)
    
    function resetWorld(){
    
    }
    
    return (
        
        <div>
            <div className="modal">  
            <h1> Investisseurs </h1>
            <div>Vous avez actuellement {world.activeangels} anges </div>
            <div>Gagnez {availableAngels} anges en vendant votre club à un investisseur !</div>
    <div className="infosangel">
    </div>
    <div onClick={resetWorld}>
        <button className='sell'>Vendre ! </button>
    </div>
 </div>
        
 </div>





            
        
            )
        
        
        }
        