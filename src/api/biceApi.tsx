import axios from 'axios';
import {API_URL} from '@env';

console.log('api', API_URL);

const biceApi = axios.create({baseURL: API_URL});
export default biceApi;
