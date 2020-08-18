export const selectAnotherUser=(name)=>{
    console.log("you clicked on user",name)
    return{
        type:"ANOTHER_USER_SELECTED",
        payload:name
    }
};