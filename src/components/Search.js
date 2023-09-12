import React from "react";
import "./Search.css";

function Search(){
  return (
    <div className="search">
      <input type="text" placeholder="Type in city name"/>
      <button className="btn">Find Weather</button>
    </div>
  );
}
export default Search;




{/* {this.state.input}
      <input
        type="text"
        id="input-name"
        onChange={event => {
          this.setState({ input: event.target.value });
        }}
      />
      <button
        onClick={event => {
          this.props.handleInput(this.state.input);
        }}
      >
        Say Hello
      </button> */}
