import {BaseUrl} from "./API";

export default class MailSender {
    static async sendDataToAdmin(nom, mail) {

        const response = await fetch(BaseUrl() + "sendMail/", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({nom: nom, mail:mail})
        })
        return response.ok;
    }

    static async sendContactToAdmin(nom, mail,description, service,entreprise,site) {
        const data = {nom: nom, mail: mail, service: service, description: description,entreprise: entreprise, site: site};
        const response = await fetch(BaseUrl() + "sendMail/info", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(data)
        })
        return response.ok
    }
    static async devi(entreprise,nom,mail,portable,description,service) {
        const data = {nom: nom, mail: mail, description: description,entreprise: entreprise, portable: portable,service : service};
        const response = await fetch(BaseUrl() + "sendMail/devi", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(data)
        })
        return response.ok
    }
}