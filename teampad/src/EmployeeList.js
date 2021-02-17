import React from "react";

class EmployeeList extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25&nat=us")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return { data };
        })
      );
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default EmployeeList;
