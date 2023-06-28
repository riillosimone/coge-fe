import { Azienda } from "./azienda";
import { Risorsa } from "./risorsa";

export class Commessa {
    constructor(
        public id?:number,
        public descrizione?:string,
        public codice?:string,
        public dataIn?:Date,
        public dataOut?:Date,
        public importo?:number,
        public azienda?:Azienda,
        public risorse?:Risorsa[]
    ){}
}
