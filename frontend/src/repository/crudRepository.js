import axios from "../custom-axios/axios";

const CrudService = {
    getCategories: () => {
        return axios.get("/category");
    }
}

export default CrudService;