import axios from "axios";


const BASE_URL = 'https://676d5e440e299dd2ddff55b6.mockapi.io/shop';

export const getProducts = async () =>{
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}