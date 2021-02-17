import React, { Component } from "react";
import "./styles.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 1,
          picture: "https://randomuser.me/api/portraits/men/75.jpg",
          name: "Thomas Goodwin",
          gender: "male",
          city: "salt Lake City",
          postcode: "84103",
          email: "tgoodwin@gmail.com",
          registered: "2002-05-21T10:59:49.966Z",
        },
      ],
    };
  }

  renderTableData() {
    return this.state.employees.map((employee, index) => {
      const {
        id,
        picture,
        name,
        gender,
        city,
        postcode,
        email,
        registered,
      } = employee;
      return (
        <>
          <tr>
            <th>Employee Id</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Email</th>
            <th>Date of Employ</th>
          </tr>

          <tr key={id}>
            <td>{id}</td>
            <td>{picture}</td>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{city}</td>
            <td>{postcode}</td>
            <td>{email}</td>
            <td>{registered}</td>
          </tr>
        </>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Employee Table</h1>
        <table id="employees">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
