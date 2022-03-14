import {Pallier, World} from './world';
import axios, {AxiosError, AxiosPromise} from "axios";

export class Services {
    server = "http://localhost:8080/"
    api = this.server + "adventureisis/generic"; 
    user = "";
    constructor(user: string) { 
        this.user = user
    } 
    private static handleError(error: AxiosError): AxiosPromise<any> {
        console.error('An error occurred', error.toJSON);
        return Promise.reject(error.message || error); }
        private static setHeaders(user : string) { 
            return {
                "X-User": user
            }
        }
        getWorld(): AxiosPromise<World> { 
            return axios({
        method: 'get',
        url: this.api + '/world',
        headers: Services.setHeaders(this.user)
        }).catch(Services.handleError)
}

putManager(manager : Pallier): AxiosPromise<Response> {
    console.log("Recrutement ouvert")
    return axios({
    method: 'put',
    url: this.api + '/manager',
    data: manager,
    headers: Services.setHeaders(this.user)
    }).catch(Services.handleError)
   }

   putUpgrade(upgrade : Pallier): AxiosPromise<Response> {
    return axios({
        method: 'put',
        url: this.api + '/upgrade',
        data: upgrade,
        headers: Services.setHeaders(this.user)
    }).catch(Services.handleError)
}

resetWorld(upgrade : Pallier): AxiosPromise<Response> {
    console.log("Reset")
    return axios({
        method: 'delete',
        url: this.api + '/world',
        data: upgrade,
        headers: Services.setHeaders(this.user)
    }).catch(Services.handleError)
}
   
}

export default Services;