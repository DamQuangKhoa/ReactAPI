import axios from 'axios'
import { ROOT_API } from '../constants/config';

export default function callAPI(endpoint, method= 'GET', body) {
    return axios({
        method:  method ,
        url: `${ROOT_API}${endpoint} `,
        data: body
    }).catch((e) => {
        console.log(e);
    });
}