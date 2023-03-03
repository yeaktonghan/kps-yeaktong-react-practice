import React, { Component } from "react";
import TableComponent from "./TableComponent";

export default class InputFieldComponent extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: "Buy Banana", dueDate: "2022-12-12", status: "In Progress" },
      ],
      newTask: "",
      newDate: "",
    };
  }

  handleDateInput = (dateEvent) => {
    this.setState({
      newDate: dateEvent.target.value,
    },
    // () => console.log(typeof(this.state.newDate))
    );
  };

  handleTaskInput = (taskEvent) => {
    this.setState({
      newTask: taskEvent.target.value,
    },
    // ()=>console.log(this.state.newTask)
    );
  };

  handleSubmit = () => {
    const newList = {
      task: this.state.newTask, dueDate: this.state.newDate, status: "In Progress"
    };
    this.setState({
      tasks: [...this.state.tasks, newList],
      newList: "",
    },
    // () => console.log(this.state.tasks)
    )
  }

  render() {
    return (
      <div className="container my-6 flex flex-col max-w-lg">
        <div className="flex justify-between">
          <label htmlFor="input">To do Task : </label>
          <input
            type="text"
            className="rounded border-2 border-cyan-900"
            onChange={this.handleTaskInput}
          />
        </div>
        <div className="flex justify-between pt-2">
          <label htmlFor="input">Due Date : </label>
          <input
            className="border-black border px-2"
            type="date"
            name="due"
            id="due"
            onChange={this.handleDateInput}
          />
        </div>
        <div className="self-center">
          <button className="rounded bg-cyan-900 text-white px-4 py-2" onClick={this.handleSubmit}>
            Insert Task
          </button>
        </div>

        <TableComponent items = {this.state.tasks}/>
      </div>
    );
  }
}
