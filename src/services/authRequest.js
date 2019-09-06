import axios from 'axios';

const authRequest = () => {
  const token = localStorage.getItem('authToken');
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default authRequest;
