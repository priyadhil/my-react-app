import React, { Component } from "react";
//import React from "react";
//import PropTypes from "prop-types";
import autoBind from "react-autobind";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header class="App-first">
//           <p>Edit src/App.js and save to reload.</p>
//         </header>
//       </div>
//     );
//   }
// }

// const App = function() {
//   return (
//     <div>
//       <header class="App-first">
//         <p>welcome to react page</p>
//       </header>
//     </div>
//   );
// };

// class App extends Component {
//   render() {
//     const name = this.props.name,
//       age = this.props.age,
//       dat = this.props.dat;
//     return (
//       <div className="App-first">
//         <p>My app Name:{name}</p>
//         <p>My App age:{age} day</p>
//         <p>Date: {dat} </p>
//       </div>
//     );
//   }
// }
//Checking object datatype
// const isTypeString = React.PropTypes.string.isRequired,
//   isTypeNumber = React.PropTypes.number.isRequired;
// App.propTypes = {
//   name: isTypeString,
//   age: isTypeNumber
// };
// App.defaultProps = {
//   age: 2
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Priya",
      subject: "ReactJS",
      marks: 90,
      rank: 5
    };
    autoBind(
      this,
      "updateSubject",
      "updateMark",
      "incrementRank",
      "decrementRank"
    );
  }
  componentDidMount() {
    console.log("component mounted");
  }
  updateSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }
  updateMark(e) {
    this.setState({
      marks: e.target.value
    });
  }
  incrementRank() {
    this.setState({
      rank: this.state.rank + 1
    });
  }
  decrementRank() {
    this.setState({
      rank: this.state.rank - 1
    });
  }
  render() {
    return (
      <div className="App-first">
        <h1>State in React - Autobind</h1>
        <p> Name : {this.state.name}</p>
        <p> Subject : {this.state.subject}</p>
        <p> Marks : {this.state.marks}</p>
        <p> Rank : {this.state.rank}</p>
        <input type="text" onChange={this.updateSubject} />
        <input type="number" onChange={this.updateMark} />
        <button onClick={this.incrementRank}>+</button>
        <button onClick={this.decrementRank}>-</button>
      </div>
    );
  }
}
export default App;
