import { Risorsa } from "./risorsa";

export class Attachment {

    constructor(
        public id?: number,
        public fileName?:string,
        public contentType?:string,
        public descrizione?:string,
        public dataCreazione?:Date,
        public payload?:string,
        public risorsa?:Risorsa
    ) { }
    

}
