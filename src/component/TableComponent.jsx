import React, { Component } from "react";

export default class TableComponent extends Component {
  render() {
    return (
      <div className="my-12">
        <table class="table-auto border-cyan-600 border-collapse border">
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-12 border border-cyan-600">Buy Banana</td>
              <td className="px-12 border border-cyan-600">5:30 PM</td>
              <td className="px-12 border border-cyan-600">In Progress</td>
            </tr>
            <tr>
              <td className="px-12 border border-cyan-600">Lorem, ipsum dolor.</td>
              <td className="px-12 border border-cyan-600">Lorem, ipsum dolor.</td>
              <td className="px-12 border border-cyan-600">Complete</td>
            </tr>
            <tr>
              <td className="px-12 border border-cyan-600">Lorem, ipsum dolor.</td>
              <td className="px-12 border border-cyan-600">Lorem, ipsum dolor.</td>
              <td className="px-12 border border-cyan-600">In Progress</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
