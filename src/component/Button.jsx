// import React, {Component} from "react";

// export default class Button extends Component {
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };

//     }
//     updateCount = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 }
//       });}
//     render() {
//       return (<button onClick={this.updateCount}>
//                 Clicked {this.state.count} times
//               </button>);}
//   }

import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="rounded bg-cyan-900 text-white px-4 py-2">Click here</button>
      </div>
    );
  }
}
