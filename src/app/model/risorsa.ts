import { Attachment } from "./attachment";

export class Risorsa {

    constructor(
        public id?:number,
        public nome?:string,
        public cognome?:string,
        public cf?:string,
        public dataIn?:Date,
        public dataOut?:Date,
        public email?:string,
        public costoGiornaliero?:number,
        public cv?:Attachment
    ){}

}
