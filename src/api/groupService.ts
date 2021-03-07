import axios from "axios";
import { environment } from '../environments/environmentDevelopment';

const API_ENDPOINT: string = environment.ApiEndpoint;

const getGroups = async () => {
    const endPoint = `${API_ENDPOINT}/group`;
    const res = await axios.get(endPoint);
    return res.data;
};

const createGroup = async (groupName: string, studentList: string[], moduleList: string[]) => {
    const payload =
        {
            name: groupName,
            modules: moduleList,
            users: studentList,
        };
    const endPoint = `${API_ENDPOINT}/group/`;
    const res = await axios.post(endPoint, payload);
    return res.status === 200 ? true : false;
};

export {
    getGroups,
    createGroup,
};
