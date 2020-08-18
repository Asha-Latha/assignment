import React from 'react';
import {selectAnotherUser} from '../actions/lastname'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
class LastNameDetails extends React.Component {

getlastname=(e)=>{
    this.props.selectAnotherUser(e.target.value)
}

    render() { 
        return ( 
           <div><input type="text" name="lastname" onChange={this.getlastname}/></div>
         );
    }
}

function mapStatesToProps(state){
    return{
        anotheruserreducer:state.name
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectAnotherUser: selectAnotherUser},dispatch)
    } 
export default connect(mapStatesToProps,matchDispatchToProps)(LastNameDetails);