import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseFunc = this.increaseFunc.bind(this);
    this.decreaseFunc = this.decreaseFunc.bind(this);
  }

  increaseFunc() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseFunc() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="component-container">
        <h4>class component</h4>
        <p>{this.state.count}</p>
        <button onClick={this.increaseFunc}>increase</button>
        <button onClick={this.decreaseFunc}>decrease</button>
      </div>
    );
  }
}

export default ClassComponent;
