export const selectUser=(name)=>{
    console.log("you clicked on user",name)
    return{
        type:"USER_SELECTED",
        payload:name
    }
};