import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
const cookie = import.meta.env.VITE_API_COOKIE;

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export const fetchData = async (page = 1) => {
    try {
        const response = await axiosInstance.post('/', {
            limit: page * 5,
            page: 0,
            search: ''
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
};
