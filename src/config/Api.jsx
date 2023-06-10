import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Authorization': localStorage.getItem('token')
    }
});

// Api.get('usuarios');
// Api.get('usuarios/1');
// Api.post('usuarios', dados);
// Api.put('usuarios/1', dados);
// Api.delete('usuarios/1');

export default Api;