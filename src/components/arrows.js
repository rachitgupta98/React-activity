import React, { Component } from "react";
import Arrow from "./arrow";
class Arrows extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = inc => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(inc);
    counter[index] = { ...inc };
    counter[index].value++;
    this.setState({ counter });
  };

  handleDelete = counterId => {
    const counter = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter });
  };
  handleDecrement = e => {
    const counter = [...this.state.counter];
    for (let i = 0; i < counter.length; i++) {
      if (counter[i].value == 0) {
        this.setState({ counter });
      } else {
        const index = counter.indexOf(e);
        counter[index] = { ...e };
        counter[index].value--;
        this.setState({ counter });
      }
    }
  };
  handleReset = () => {
    const counter = [...this.state.counter];
    const debug = counter.forEach(function(d) {
      return (d.value = 0);
    });
    this.setState({ debug });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn-primary btn-sm">
          Reset
        </button>
        {this.state.counter.map(tag => (
          <Arrow
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            key={tag.id}
            tag={tag}
          />
        ))}
      </div>
    );
  }
}

export default Arrows;
