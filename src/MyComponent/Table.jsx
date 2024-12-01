import React, { Component } from "react";
import "../Table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '100%',
    };
  }
  handleClick =() => {
    this.setState({width : '50%'});
  }
  handleDoubleClick=() => {
    this.setState({width : '100%'});
  }

  render() {
    const stateWidth = this.state;
    return (
      <div
      id="table"
      onClick= {this.handleClick}
      onDoubleClick={this.handleDoubleClick}
      style= {{
        width : this.state.width
      }} 
      >

        <table>
          <thead>
            <tr>
              <th>First col</th>
              <th>Second col</th>
              <th>Third col</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>Smith</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
