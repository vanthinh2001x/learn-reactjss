import axiosClient from "./axiosClient";

const productApi = {
    getAll(params){
        const URL = '/products';
        return axiosClient.get(url, { params });
    },
    get(id){
        const URL = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const URL = '/products';
        return axiosClient.post(url, data);
    },
    update(data){
        const URL = `/products/${id}`;
        return axiosClient.patch(url, data);
    },
    remove(id){
        const URL = `/products/${id}`;
        return axiosClient.delete(url);
    }
}

export default productApi;