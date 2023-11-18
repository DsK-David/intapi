const axios = require('axios')

class Intapi {
    constructor(apiBaseUrl){
        this.apiBaseUrl = apiBaseUrl;
    }

    async getRequest(endpoint, params = {}){
        try{
            const response = await axios.get(`${this.apiBaseUrl}/${endpoint}`, { params });
            return response.data;
        } catch(error){
            throw new Error(`Error making GET request to ${endpoint}:${error.message}`);
        }
    }

    async postRequest(endpoint, data = {}){
        try{
            const response = await axios.post(`${this.apiBaseUrl}/${endpoint}`, data);
            return response.data;
        } catch(error){
            throw new Error(`Error making POST request to ${endpoint}:${error.message}`);
        }
    }
}


module.exports= Intapi;