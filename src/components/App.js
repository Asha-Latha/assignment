import React from 'react';
import UserDetails from '../container/userdetails';
import UserList from '../container/userlist';
import LastNameDetails from '../container/lastnamedetails'
import LastNameList from '../container/lastnamelist'
import Likes from '../container/likes'

class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h3>First Name</h3>
            <UserDetails></UserDetails><h3>Last Name</h3>
            <LastNameDetails></LastNameDetails>
         <div><UserList></UserList><LastNameList></LastNameList><h2>@</h2><Likes></Likes></div>
        
        </div>
         );
    }
}
 
export default App;