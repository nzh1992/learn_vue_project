/*
* 整个项目API的统一管理
*/
import request from "./request";

// 首页，左侧的表格
export default {
    getTableData() {
        return request({
            url: "/api/home/getTableData",
            method: "get",
        });
    },
};