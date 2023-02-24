import React, { Component } from "react";

export default class InputFieldComponent extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     tasks = [
  //       {task : "Buy Banana", Due Date = "2022-12-12"}
  //     ]}
  //   }
  // }

  // handleDateInput = () => {

  // }

  render() {
    return (
      <div className="container my-6 flex flex-col max-w-lg">
        <div className="flex justify-between">
          <label htmlFor="input">To do Task : </label>
          <input type="text" className="rounded border-2 border-cyan-900" />
        </div>
        <div className="flex justify-between">
          <label htmlFor="input">Due Date : </label>
          <input type="date" name="due" id="due" onChange={this.handleDateInput}/>
        </div>
      </div>
    );
  }
}
