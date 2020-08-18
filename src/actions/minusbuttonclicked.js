export const minusButtonClicked=(likes)=>{
    console.log("NO of likes",likes)
    return{
        type:"MINUS_BUTTON_CLICKED",
        payload:likes
    }
};