import axios from "axios";
import { environment } from '../environments/environmentDevelopment';
import { ClusterType } from "../lib/Types";

const API_ENDPOINT: string = environment.ApiEndpoint;

const getGroups = async () => {
    const endPoint = `${API_ENDPOINT}/group`;
    const res = await axios.get(endPoint);
    return res.data;
};

const getGroupCluster = async (groupId: string, clusterId: string) : Promise<ClusterType> => {
    const endPoint = `${API_ENDPOINT}/group/${groupId}/cluster/${clusterId}`;
    const res = await axios.get(endPoint);
    return res.data;
};

const getClusterInfo = async () => { 
    const endPoint = `${API_ENDPOINT}/cluster`;
    const res = await axios.get(endPoint); 
    console.log(res.data);
    return res.data; 
};

const updateClusterInfo = async (id: string, name: string, description: string) => { 
    const payload = 
        {
            name,
            description
        };
    const endPoint = `${API_ENDPOINT}/cluster/${id}`;
    const res = await axios.put(endPoint, payload);
    return res.status === 200 ? true : false;

}

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
    getGroupCluster,
    createGroup,
    getClusterInfo,
    updateClusterInfo
};
