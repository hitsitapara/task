import { axiosGetCall } from "./axiosCall";
import {API_ENDPOINTS} from '../constants/constants'

const getTask = async(pageConfig) =>{
    try {
        const apiEndPoint = API_ENDPOINTS.GET_TASK + `?pageNumber=${pageConfig.pageNumber}&pageSize=${pageConfig.pageSize}`;
        const result = await axiosGetCall(apiEndPoint);
        return result;
    } catch (error) {
        throw error;
    }

}

export { getTask };
