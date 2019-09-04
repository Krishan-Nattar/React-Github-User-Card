import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import Search from "./Search";

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
        let followers = res.data;

        followers.forEach(person => {
          axios
            .get(`https://api.github.com/users/${person.login}`)
            .then(res => {
              this.setState(prevState => {
                const list = [...prevState.followers, res.data];
                return { followers: list };
              });
            });
        });
      });
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();

    this.setState({ followers: [] }, () => {
      axios
        .get(`https://api.github.com/users/${this.state.search}`)
        .then(res => {
          this.setState({ data: [res.data] });
        });

      axios
        .get(`https://api.github.com/users/${this.state.search}/followers`)
        .then(res => {
          let followers = res.data;

          followers.forEach(person => {
            axios
              .get(`https://api.github.com/users/${person.login}`)
              .then(res => {
                this.setState(prevState => {
                  const list = [...prevState.followers, res.data];
                  return { followers: list };
                });
              });
          });
        });
    });
  };
  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        {this.state.data
          ? this.state.data.map(user => <UserCard user={user} key={user.login} />)
          : null}
        {this.state.followers
          ? this.state.followers.map(person => {
              return <UserCard user={person} key={person.login}/>;
            })
          : null}
      </div>
    );
  }
}

export default GitHub;
