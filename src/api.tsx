import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";


export class FDA{

    static async register(user : string){
        console.log("Testing FDA api", user)
        let response = await axios.post(`${BASE_URL}/user`,user)
        return response.data
    }
}
