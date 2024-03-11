import axios from 'axios';

/*Etapa de configuracao do Axios*/

//url que nunca vai mudar viacep.com.br/ws/01310930/json
//apenas o numero que muda, o que muda é rota

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

/*Etapa de exportação*/

export default api;
