// @ts-ignore
import {BaseURL} from "./ApiUrl.ts";

export default class Postule {
    id: number;
    nom: string
    prenom: string
    email: string
    lm: string;
    cv: File;

    constructor(id: number, nom: string, prenom: string, email: string, lm: string, cv: File) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.lm = lm;
        this.cv = cv;
    }
    static async sendCandidat(candidat,idOffre) {
        const response = await fetch(BaseURL() + "offre/candidat/"+idOffre, {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(candidat)
        })
        return response.ok;
    }
}