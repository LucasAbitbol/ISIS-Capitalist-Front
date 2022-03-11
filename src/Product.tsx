import Services from "./Services";
import { Product } from "./world";
import "./product.css";
import ProgressBar from "./ProgressBar";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import addToScore from "./App"

type ProductProps = {
    prod: Product
    onProductionDone: (product: Product) => void,
    qtmulti : String
    services: Services
    }
        export default function ProductComponent({ prod,onProductionDone,qtmulti, services } : ProductProps) 
        {

            const [progress, setProgress] = useState(0)

           /* setInterval(() => calcScore(), 100)
            const savedCallback = useRef(calcScore) 
            useEffect(() => savedCallback.current = calcScore)
            useEffect(() => {
            let timer = setInterval(() => savedCallback.current(), 100)
            return function cleanup() {
            if (timer) clearInterval(timer)
            }
            }, [])

            function startFabrication(){
                if (prod.quantite>0) {
                    console.log("Icone cliquée")
                    console.log(prod.name)
                    prod.timeleft = prod.vitesse
                    prod.lastupdate = Date.now()
                }
            }

            function calcScore(){
                if (prod.timeleft == 0){
                    setProgress(0)
                }

                else{
                    prod.timeleft -= Date.now() - prod.lastupdate
                    
                    if(prod.timeleft<0){
                        prod.timeleft = 0
                        prod.progressbarvalue = 40
                        onProductionDone(prod)
                    }
                    else{
                        prod.progressbarvalue = ((prod.vitesse - prod.timeleft) / prod.vitesse) * 100
                    }
                    setProgress(prod.progressbarvalue)
                }
            } */


            if (prod==null){
                return (
                    <div></div>
                )
            }   
             else{                
             return (

              <div>
          <div className="product2">
          <img className="logo" src={services.server + prod.logo} /> 
    <div> <span className="nameprod">{prod.name}</span></div>
   <div className="progressbar"> <Box sx={{width: '100%'}}>
 <ProgressBar transitionDuration={"0.1s"} customLabel={" "}
completed={progress}/>
</Box> </div>
    <div> <button className='prix' /*onClick={startFabrication}*/>{prod.cout}$</button></div>
    <div className='tpsprod'>Temps de recrutement : {prod.vitesse/1000} secondes</div>
    <div className='qte'>Joueurs formés :{prod.quantite}</div>
</div>
                  
                  </div>
              )
              ;}
           };