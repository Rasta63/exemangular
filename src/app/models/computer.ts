export class Computer {
    id: number;
    modele: string;
    marque: string;
    type: string;
    category: string;
    prixAchat: number;
    prixVente: number;
    dateEntreeStock: Date;
    constructor(id = null, modele = null, marque = null, type = "", category = null, prixAchat = null, prixVente = null) {
        this.id = id;
        this.modele = modele;
        this.marque = marque;
        this.type = type;
        this.category = category;
        this.prixAchat = prixAchat;
        this.prixVente = prixVente;
        this.dateEntreeStock = new Date();
    }
}
