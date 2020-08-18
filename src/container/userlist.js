import React from 'react';
import {connect} from 'react-redux'
class UserList extends React.Component {
    state = {  }
    render() { 
        if(!this.props.name){
            return (<h2>Type in first name</h2>)
        }
        return ( 
         
<div>
        <h2>{this.props.name}</h2> 
</div>
         );
    }
}

function mapStateToProps(state){
    return {
        name:state.users
    }
}
 
export default connect(mapStateToProps)(UserList);