import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params){
        const URL = '/categories';
        return axiosClient.get(url, { params });
    },
    get(id){
        const URL = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const URL = '/categories';
        return axiosClient.post(url, data);
    },
    update(data){
        const URL = `/categories/${id}`;
        return axiosClient.patch(url, data);
    },
    remove(id){
        const URL = `/categories/${id}`;
        return axiosClient.delete(url);
    }
}

export default categoryApi;