import axios from 'axios'

export default ()=>{
   return  axios.create({
        baseURL:`http://localhost:8000/api`,
        headers: {
            Authorization: 'Bearer '+localStorage.getItem('token')||'',
            Accept: 'application/json',
            'X-Requested-With':'XMLHttpRequest'
        }
    })
}