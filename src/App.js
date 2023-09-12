import React from "react";
import Search from "./components/Search";
import {CurrentWeather,WeatherItem} from "./components/WeatherItem";



import "./App.css";

function App(){
  return(
    <div className="app">
      <Search/>
      <CurrentWeather/>
      <WeatherItem/>
    </div>
  )
}


export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Karim"
//     };
//   }

//   handleInputChange = value => {
//     this.setState({ name: value });
//   };

//   render() {
//     return (
//       <div className="app">
//         <SayHi />
//         <SayHello name={this.state.name} />
//         <Search handleInput={this.handleInputChange} />
//       </div>
//     );
//   }
// }
