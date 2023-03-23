import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Rating />
    </div>
  );
}

export default App;

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
  }
  setActive(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    var stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          className={i <= this.state.activeIndex ? "active" : ""}
          key={i}
          onClick={this.setActive.bind(this, i)}
        >
          *
        </span>
      );
    }
    return <div>{stars}</div>;
  }
}
