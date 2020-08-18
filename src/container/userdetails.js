import React from 'react';
import {selectUser} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class UserDetails extends React.Component {
    getname=(e)=>{
        this.props.selectUser(e.target.value)
    }

    render() {  
        return (<div><input type="text" name="fname" onChange={this.getname}/></div>)     
    }
}
 

function mapStatesToProps(state){
    return{
        users:state.name
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser},dispatch)
    }
     
    export default connect(mapStatesToProps,matchDispatchToProps)(UserDetails);

