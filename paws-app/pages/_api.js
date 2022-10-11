import axios, { request } from 'axios';
import { getCookie } from 'cookies-next';

const axiosConfig = {
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 3000,
};

const api = (options = {}) =>
  request({ ...axiosConfig, ...options }).then(
    (response) => {
      if (response.status == 204) return responseObject;
      return response;
    },
    (error) => {
      console.log('Error on api call: ', error);
      return error.response;
    }
  );

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.code == 'ECONNREFUSED') { // errors
      Object.assign(error, {
        response: {
          data: {
            result: {
              responseMessage: JSON.stringify(error),
            },
          },
          status: 500,
        },
      });
    }

    return Promise.reject(error);
  }
);

export default api;
