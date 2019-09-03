import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class GitHub extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/krishan-nattar')
        .then(res=>{
            console.log(res.data);
            this.setState({data: res.data});
        });
    }
    // state = {  }
    render() { 
        return ( 
            <div>
                GitHub Component
                
                {(this.state.data) ? <UserCard data={this.state.data}/> : null}
                </div>
         );
    }
}
 
export default GitHub;