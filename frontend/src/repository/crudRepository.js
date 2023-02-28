import axios from "../custom-axios/axios";

const CrudService = {
    getCategories: () => {
        return axios.get("/category");
    },
    deleteCategory: (id) =>{
        return axios.delete(`/category/${id}`);
    }
}

export default CrudService;