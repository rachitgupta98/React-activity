import React, { Component } from "react";
class Arrow extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.tag)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.tag.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.tag)}
          className="btn btn-primary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }
  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.tag.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.tag; //object destructing
    return value === 0 ? "Zero" : value;
  }
}

export default Arrow;
