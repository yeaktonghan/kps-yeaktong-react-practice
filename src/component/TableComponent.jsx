import React, { Component } from "react";

export default class TableComponent extends Component {
  render() {
    return (
      <div className="my-12">
        <table className="table-auto border-cyan-600 border-collapse border">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <tr>
                <td className="px-12 border border-cyan-600 whitespace-nowrap">{item.task}</td>
                <td className="px-12 border border-cyan-600 whitespace-nowrap">{item.dueDate}</td>
                <td className="px-12 border border-cyan-600 whitespace-nowrap">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
