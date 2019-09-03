import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/krishan-nattar").then(res => {
      this.setState({ data: [res.data] });

      axios
        .get("https://api.github.com/users/krishan-nattar/followers")
        .then(res => {
          const followers = res.data;
          const followerArray = [];

          followers.forEach(person => {
            axios
              .get(`https://api.github.com/users/${person.login}`)
              .then(res => {
                followerArray.push(res.data);
              });
          });
          console.log(followerArray);
          this.setState({ followers: followerArray });
        });
    });
  }
  render() {
    console.log(this.state.followers);

    this.state.followers.forEach(item => {
      console.log(item);
    });
    return (
      <div>
        GitHub Component
        {this.state.followers.map(person => {
          return <h1>Hello!</h1>;
        })}
      </div>
    );
  }
}

export default GitHub;

{
  /*                 
                {(this.state.data[0]) ? <UserCard data={this.state.data[0]}/> : null}
                {this.state.data.map(thing=>{
                    return <h1>Hello2</h1>
                })} */
}
{
  /* {(this.state.followers) ? this.state.followers.map(person=>{ */
}
{
  /* return <UserCard data={person}/> */
}
{
  /* return <h1>hi</h1> */
}
{
  /* }) : null} */
}
