import Services from "./Services";
import { Product,World } from "./world";
import "./product.css";
import ProgressBar from "./ProgressBar";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import addToScore from "./App"

type ProductProps = {
    prod: Product
    onProductionDone: (product: Product) => void,
    qtmulti : number
    services: Services
    cash : number
    }
        export default function ProductComponent({ prod,onProductionDone,qtmulti, services,cash } : ProductProps) 
        {

            const [progress, setProgress] = useState(0)
            const savedCallback = useRef(calcScore)
            // calcMaxcanBuy()


useEffect(() => savedCallback.current = calcScore)
useEffect(() => {
 let timer = setInterval(() => savedCallback.current(), 5000)
 return function cleanup() {
 if (timer) clearInterval(timer)
 }
}, [])

//setInterval(() => calcScore(), 5000)

function startFabrication(){
        
}

 function calcScore(){
       
    
}


            function calcMaxcanBuy(){ //appeler dans calcscore pour update xmax
                const qtmax = (Math.log(1 - (cash*(1-prod.croissance))/prod.cout))/Math.log(prod.croissance)
                if(qtmulti==2){
        if (qtmax <= 0){
            prod.quantite = 0
        }else{
            qtmulti = Math.floor(qtmax)
        }
        return qtmulti
            }}

            
                
            
            if (prod==null){
                return (
                    <div>oui</div>
                )
            }   
             else{                
             return (

              <div>
          <div className="product2">
          <img className="logo" onClick={startFabrication} src={services.server + prod.logo} /> 
    <div> <span className="nameprod">{qtmulti} {prod.name}</span></div>
   <div className="progressbar"> <Box sx={{width: '100%'}}>
 <ProgressBar transitionDuration={"0.1s"} customLabel={" "}
completed={progress}/>
</Box> </div>
    <div> <button className='prix' disabled={cash<qtmulti*prod.cout} >{qtmulti*prod.cout}$</button></div>
    <div className='tpsprod'>Temps de recrutement  pour {qtmulti} joueurs : {prod.vitesse/1000*qtmulti} secondes</div>
    <div className='qte'>Joueurs formés : {prod.quantite}</div>
</div>
                  
                  </div>
              )
              ;}
           };