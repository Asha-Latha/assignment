export default function(state=null,action){
    switch(action.type){
        case "ANOTHER_USER_SELECTED":
            return action.payload;
            break;
    }
    return state;
    
}