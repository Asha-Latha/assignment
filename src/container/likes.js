import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {plusButtonClicked} from '../actions/plusbuttonclicked'
import {minusButtonClicked} from '../actions/minusbuttonclicked'

class Likes extends React.Component {
    getLikesFromProps=()=>{
        console.log("Received likes as prop in FriendLike container....")
        console.log(this.props.likes);
        let friendlikes = this.props.likes[0].likes;
        console.log(friendlikes);
        return friendlikes
    }

    getLikeObject=()=>{
        console.log("Preparing to broadcast payload for likes....")
        console.log(this.props.likes);
        let friendlikes = this.props.likes.likes
        console.log(friendlikes);
        return friendlikes 
    }
    
    render() { 
        if(this.props.state === null){
            return (
                <div>
                    <h3>Click on + to change likes!!!!</h3>
                </div>
            )
        }else{
        return ( 
            
                <div>
                    Add Score :
                    <br></br>
                    <button onClick={()=>this.props.plusClicked(this.getLikeObject())}>+</button>
                    &nbsp; {this.getLikesFromProps()}  &nbsp;
                    <button onClick={()=>this.props.minusClicked(this.getLikeObject())}>-</button>
                </div>
              
         );
    }}
}


function convertStoreToPropsForFriendLikesContainer(store){
    console.log("Received store in FriendLike container....");
    console.log(store);
    return {
        likes: store.friendlikes
    }
}

function convertEventToPropsAndDispatchFromFriendLikesContainer(dispatch){
    return bindActionCreators({
        plusClicked: plusButtonClicked,
        minusClicked : minusButtonClicked
    }, dispatch)
}
 
export default  connect(convertStoreToPropsForFriendLikesContainer, convertEventToPropsAndDispatchFromFriendLikesContainer)(Likes);