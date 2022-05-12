import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/550?api_key=77fdd7b7cf51e014c301e980d064c93b

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;