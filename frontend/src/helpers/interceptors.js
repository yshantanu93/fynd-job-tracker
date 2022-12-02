import axios from "axios";
import store from "../store/store";

function requestInterceptor() {
  axios.interceptors.request.use(
    function (config) {
      const token = store.getters.getToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
}

function responseInterceptor() {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );
}

export { requestInterceptor, responseInterceptor };
