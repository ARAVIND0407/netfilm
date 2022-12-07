import axios_custom from 'axios';
import { baseUrl } from './Urls';


const instance = axios_custom.create({
    baseURL: baseUrl
});

export default instance;