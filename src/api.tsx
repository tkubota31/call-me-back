import axios from "axios"
import User from "./pages/Registration"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

export class FDA{

    static async register(user : typeof User){
        let response = await axios.post(`${BASE_URL}/user/update`,user)
        return response.data
    }

    static async getReport(){
        let response = await axios.get(`${BASE_URL}/food`)
        return response.data
    }

}
