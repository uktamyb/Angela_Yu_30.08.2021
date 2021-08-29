import { Component } from "react";
import "./styles.css";

const currentTime = new Date();
const realTime = currentTime.getHours();

let greeting;

if (greeting < 12) {
  greeting = "Good morning";
} else if (greeting < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{greeting}</h1>
      </div>
    );
  }
}
