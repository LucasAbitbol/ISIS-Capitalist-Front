import Services from "./Services";
import { Product,World } from "./world";
import "./product.css";
import ProgressBar from "./ProgressBar";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import addToScore from "./App"
import { time } from "console";
import Manager from "./Manager";
import Unlocks from "./Unlocks";

type ProductProps = {
    world : World
    prod: Product
    onProductionDone: (product: Product) => void,
    qtmulti : number
    services: Services
    cash : number
    }
        export default function ProductComponent({ world,prod,onProductionDone,qtmulti, services,cash } : ProductProps) 
        {
            const [unlockup,setunlockup] = useState(false)
            const [progress, setProgress] = useState(0)
            let lastupdate = Date.now();
            setInterval(() => calcScore(), 5000)


            const savedCallback = useRef(calcScore)
            useEffect(() => savedCallback.current = calcScore)
            useEffect(() => {
             let timer = setInterval(() => savedCallback.current(), 5000)
             return function cleanup() {
             if (timer) clearInterval(timer)
             }
            }, [])
            

            function calcScore(){
               // calcMaxcanBuy()
                
                //  if (prod.quantite=0){
                     
                //  }
                
                //  else{
                //        if (prod.managerUnlocked == true){
                //            startFabrication()
                //        }
                //      let tpsecoule = Date.now()-prod.lastupdate 
                //      prod.timeleft -= tpsecoule
                        
                //      if (prod.timeleft<=0){
                //          prod.timeleft=0
                //          prod.progressbarvalue=0
                //          setProgress(prod.progressbarvalue)
                //          onProductionDone(prod)

                //      } else {
                //          if (prod.timeleft=NaN){
                //              prod.timeleft=0
                //          }
                //     prod.progressbarvalue = ((prod.vitesse - prod.timeleft)/10)
                //     console.log(prod.timeleft+"+"+prod.vitesse)
                    
                //     setProgress(prod.progressbarvalue)
                //      }
                // }

            }

            function showUnlocks(){
                //return prod.palliers.name
                if (unlockup ==false){
                    setunlockup(true)
                    
                  }
                  else {
                    setunlockup(false)
                   
                  } 

            }

            function startFabrication(){
                setProgress(0)
                prod.lastupdate = Date.now()
                prod.timeleft = prod.vitesse
               cash += prod.cout*prod.revenu
                console.log("fab"+cash)
                return prod.timeleft
            }

        //     function calcMaxcanBuy(){ //appeler dans calcscore pour update xmax
        //         const qtmax = (Math.log(1 - (cash*(1-prod.croissance))/prod.cout))/Math.log(prod.croissance)
        //         if(qtmulti==2){
        // if (qtmax <= 0){
        //     prod.quantite = 0
        // }else{
        //     qtmulti = Math.floor(qtmax)
        // }
        // return qtmulti
        //     }}

            
                
            
            if (prod==null){
                return (
                    <div>oui</div>
                )
            }   
             else{                
             return (

              <div>
          <div className="product2">
          <img className="logo" src={services.server + prod.logo} /> 
    <div> <span className="nameprod">{qtmulti} {prod.name}</span></div>
   <div className="progressbar"> <Box sx={{width: '100%'}}>
 <ProgressBar transitionDuration={"0.1s"} customLabel={" "}
completed={progress}/>
</Box> </div>
    <div> <button className='prix' disabled={cash<qtmulti*prod.cout} >{qtmulti*prod.cout}$</button></div>
    <div className='tpsprod'>Temps de recrutement  pour {qtmulti} joueurs : {prod.vitesse/1000*qtmulti} secondes</div>
    <div className='qte'>Joueurs formés : {prod.quantite}</div>
    <div className='unlocks'> <button className="unlock" onClick={showUnlocks}>Unlocks</button></div>
    {unlockup &&
<div className="unlo" onClick={showUnlocks}> <Unlocks world={world} prod={world.products.product[0]} services={services} showUnlocks={showUnlocks} /> </div>
    }
</div>
                  
                  </div>
              )
              ;}
           };