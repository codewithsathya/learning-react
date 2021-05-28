import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        </div>
        <div className="col-11">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-dark btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={this.getDecrementButtonClasses()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-1"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getDecrementButtonClasses() {
    let classes = "btn btn-sm m-1 btn-";
    classes += this.props.counter.value === 0 ? "secondary" : "dark";
    return classes;
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
