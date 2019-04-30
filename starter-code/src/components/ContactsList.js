import React from "react";

class ContactsList extends React.Component {
  render() {
    return (
      <table
        style={{
          width: "50%",
          margin: "auto"
        }}
      >
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.props.contacts.map((el, i) => {
            return (
              <tr onClick={() => this.props.handleDelete(i)} key={i}>
                <td>
                  <img width="50" src={el.pictureUrl} />
                </td>
                <td>{el.name}</td>
                <td>{el.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ContactsList;
