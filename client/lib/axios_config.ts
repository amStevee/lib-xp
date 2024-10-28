import connection from 'axios';

const axios = new connection.Axios({baseURL: 'http://localhost:8000'})

export default axios;
