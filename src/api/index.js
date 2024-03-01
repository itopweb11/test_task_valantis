import axios from 'axios';
import hash from "@/helpers/hash";

const request = async (data) => {
    try {
        const response = await http(data)
        return Promise.resolve(response)
    } catch (error) {
        if (!!error.response.data && error.response.status !== 401 && error.response.status !== 400) {
            console.error(error.response.data)
            return request(data)
        }
        return Promise.reject(error);
    }
}

const http = (data = {}) => {
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "X-Auth": hash(process.env.REACT_APP_PASS)
        },
        method: "POST",
        baseURL: process.env.REACT_APP_API_URL,
        data: data,
    }

    const instance = axios.create(options);

    return instance.request(options);
};

export default request;


