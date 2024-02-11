import axios from "axios";
import {toast} from "react-toastify";

export default {
    setupInterceptors: () => {
        axios.interceptors.request.use(
            (config) => {
                config.url += "&lat=35.77364&long=51.41831&page_size=10";
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {

            toast("error");
            return Promise.reject(error);
        });
    }
};
