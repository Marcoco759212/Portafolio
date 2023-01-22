import axios from 'axios'

export default axios.create({
    baseURL: 'https://apiatoron.mahrsrv.xyz',
    responseType: 'json',
    timeout: 6000
})