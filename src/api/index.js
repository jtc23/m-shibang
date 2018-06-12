import axios from 'axios';
axios.defaults.baseURL ="http://localhost:80";
export let getAnimation=()=>{
	return axios.get('/animation')
}
export let getProduct=()=>{
	return axios.get('/product')
}