import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
            name: "",
            location: "",
            avatar_url: ""
        }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PradumnO9");
    const json = await data.json();

    this.setState({
        user: json,
    });
    console.log(json);
  };

  render() {
    const { name, url, avatar_url } = this.state.user;

    return (
      <div className="user-card">
        <img alt="" src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>GitHub URL: {url}</h2>
        <h2>Contact: @pradumn_9</h2>
      </div>
    );
  }
}

export default UserClass;
