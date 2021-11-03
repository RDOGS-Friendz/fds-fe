import axios from 'axios';
// import { authCon../store} from './user/constants';

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

agent.interceptors.response.use(
  res => res,
  error => {
    console.log(error.toString());
    return Promise.reject(error);
  }, // not 2xx
);

export default agent;
