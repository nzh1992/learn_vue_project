import axios from "axios";
import { ElMessage } from "element-plus";

const service = axios.create();

// 请求拦截器
service.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (res) => {
        const { code, data, msg } = res.data;
        if (code === 200) {
            return data
        } else {
            const NETWORK_ERROR = "网络错误";
            ElMessage.error(msg || NETWORK_ERROR);
            return Promise.reject(msg || NETWORK_ERROR);
        }
    }
);

// 请求时调用方法
function request(options) {
    options.method = options.method || "get";
    return service(options);
}

export default request;