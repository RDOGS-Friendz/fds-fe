import axios from 'axios';
// import { authCon../store} from './user/constants';

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

agent.interceptors.response.use(
  (res) => {
    // 2xx
    if (!res.data.success) {
      console.log(`Response error: ${res.data.error}`);
      console.log(res);

      return Promise.reject(res.data.error);
    }
    return res;
  },
  (error) => Promise.reject(error), // not 2xx
);

export default agent;
