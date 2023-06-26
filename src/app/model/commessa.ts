import { Azienda } from "./azienda";

export class Commessa {
    constructor(
        public id?:number,
        public descrizione?:string,
        public codice?:string,
        public dataIn?:Date,
        public dataOut?:Date,
        public importo?:number,
        public azienda?:Azienda
    ){}
}
