import React, { Component } from "react";
//import React from "react";
//import PropTypes from "prop-types";
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

class App extends Component {
  render() {
    const name = this.props.name,
      age = this.props.age,
      dat = this.props.dat;
    return (
      <div className="App-first">
        <p>My app Name:{name}</p>
        <p>My App age:{age} day</p>
        <p>Date: {dat} </p>
      </div>
    );
  }
}
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
export default App;
