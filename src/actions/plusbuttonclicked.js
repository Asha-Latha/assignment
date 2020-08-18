export const plusButtonClicked=(likes)=>{
    console.log("NO of likes",likes)
    return{
        type:"PLUS_BUTTON_CLICKED",
        payload:likes
    }
};