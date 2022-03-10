import Services from "./Services";
import { Product } from "./world";

type ProductProps = {
    prod: Product
    services: Services
    }
        export default function ProductComponent({ prod, services } : ProductProps) 
        {
            if (prod==null) return (
                <div></div>
             )
             else{
             return (
              <div><img className="round" src={services.server + prod.logo} /> </div>
              )
              ;}
           };