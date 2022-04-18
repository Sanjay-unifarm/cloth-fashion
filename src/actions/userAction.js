
export const userAction = (payload)=>{
    console.log(payload);
    return {
        type:'SET_CURRENT_USER',
        payload
    }
}