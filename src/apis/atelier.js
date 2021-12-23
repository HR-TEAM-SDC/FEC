import axios from 'axios';
import key from './config';

export default axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: key,
    'Content-Type': 'application/json'
  },
});
