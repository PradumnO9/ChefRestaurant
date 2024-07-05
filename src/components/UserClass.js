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
      <div className="flex justify-between items-center p-4 text-center w-[70%] m-auto border-2 border-solid border-gray-200 rounded-md shadow-md">
        <img alt="" src={avatar_url} className="rounded-md" />
        <div className="mr-16">
        <h1 className="font-bold text-xl m-2">Name: {name}</h1>
        <h2>GitHub URL: {url}</h2>
        <h2 className="font-bold">Contact: @pradumn_9</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
