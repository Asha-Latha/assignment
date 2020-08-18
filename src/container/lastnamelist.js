import React from 'react';
import {connect} from 'react-redux'
class LastNameList extends React.Component {
    state = {  }
    render() { 
        if(!this.props.name){
            return (<h2>Type in Last name!</h2>)
        }
        return ( 
         
<div>
        <h2 id="lastname">{this.props.name}</h2> 
</div>
         );
    }
}

function mapStateToProps(state){
    return {
        name:state.anotheruserreducer
    }
}
 
export default connect(mapStateToProps)(LastNameList);