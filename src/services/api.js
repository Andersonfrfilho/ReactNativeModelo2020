import axios from 'axios';
// utiliza adb reverse tcp:3333 tcp:3333
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
