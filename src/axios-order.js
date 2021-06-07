import axios from 'axios'



const instance = axios.create({
    baseURL : 'https://burgery-bas2-default-rtdb.firebaseio.com/'
})


export default instance;