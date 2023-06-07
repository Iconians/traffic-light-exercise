import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    lightPosition: 0,
  };

  changeLight = () => {
    if (this.state.lightPosition === 2) {
      this.setState({ lightPosition: 0 });
    } else {
      this.setState({ lightPosition: this.state.lightPosition + 1 });
    }
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={
              this.state.lightPosition === 0 ? "circle red" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.lightPosition === 1 ? "circle yellow" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.lightPosition === 2 ? "circle green" : "circle black"
            }
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeLight}>
          Next State
        </button>
      </div>
    );
  }
}
