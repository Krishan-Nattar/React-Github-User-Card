import React, {Component} from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class GitHub extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            followers: []
        };
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/krishan-nattar')
        .then(res=>{
            // console.log(res.data);
            this.setState({data: [res.data]});

            axios.get('https://api.github.com/users/krishan-nattar/followers')
                .then(res=>{
                // console.log(res.data);
                const followers = res.data
                const followerArray = [];

                followers.forEach(person=>{
                    axios.get(`https://api.github.com/users/${person.login}`)
                    .then(res=>{
                        // console.log(res.data);
                        followerArray.push(res.data);
                    });
                });
                console.log(followerArray);
                this.setState({followers: followerArray});
                });
        });
    }
    // state = {  }
    render() { 
        return ( 
            <div>
                GitHub Component
                
                {(this.state.data[0]) ? <UserCard data={this.state.data[0]}/> : null}
                {/* {(this.state.followers) ? this.state.followers.map(person=>{ */}
                {/* return <UserCard data={person}/> */}
                {/* return <h1>hi</h1> */}
                {/* }) : null} */}
                {this.state.followers.map(person=>{
                    return <h1>Hello!</h1>
                })}
                </div>
         );
    }
}
 
export default GitHub;