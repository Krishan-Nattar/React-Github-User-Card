import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Search from './Search';

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      followers: [],
      search: "krishan-nattar"
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/krishan-nattar").then(res => {
      this.setState({ data: [res.data] });
    });

    axios
      .get("https://api.github.com/users/krishan-nattar/followers")
      .then(res => {
        const followers = res.data;
        this.setState({ followers: followers });
      });
  }


handleChange = (event) =>{

this.setState({search: event.target.value})
}
handleSearch = (event)=>{
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.search}`).then(res => {
        this.setState({ data: [res.data] });
      });
  
      axios
        .get(`https://api.github.com/users/${this.state.search}/followers`)
        .then(res => {
          const followers = res.data;
          this.setState({ followers: followers });
        });
}
  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} handleSearch={this.handleSearch}/>
        {this.state.data
          ? this.state.data.map(user => <UserCard user={this.state.data[0]} />)
          : null}
        {this.state.followers
          ? this.state.followers.map(person => {
              return <UserCard user={person} />;
            })
          : null}
      </div>
    );
  }
}

export default GitHub;

