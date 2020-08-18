export default function (state = null, action) {

    var likes = [
        {
            id: 1,
            likes: 0,

        }
    ]
    switch (action.type) {
        case "PLUS_BUTTON_CLICKED":
            console.log("Increment the likes by 1 ....")
            var updatedlikes = state.map(obj => {
                if (obj.id) {
                    obj.likes++;
                    console.log(updatedlikes)
                    console.log(state)
                    console.log(updatedlikes)
                    return obj
                }
                return obj
            })
            return updatedlikes


        case "MINUS_BUTTON_CLICKED":
            console.log("Decrement the likes by 1 ....")
            var updatedlikes = state.map(obj => {
                if (obj.id) {
                    obj.likes--;
                    console.log(updatedlikes)
                    console.log(state)
                    console.log(updatedlikes)
                    return obj
                }
                return obj
            })
            return updatedlikes
        default:
            break;
    }
    return likes;

}