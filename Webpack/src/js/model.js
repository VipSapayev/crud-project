import AJAX_CALL from "./api";

const UsersData={
    meta: {},
    users:[],
};

export const getAllUsers=async()=>{
    const response = await AJAX_CALL.get();
    UsersData.meta=response.data[0].meta;
    UsersData.users=response.data[0].items;

};

export const creatUser = async(user)=>{
    await axios.post()
}