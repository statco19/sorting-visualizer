import React, { Component } from "react";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const larray = [];
    for (let i = 0; i < 100; ++i) {
      larray.push(randomIntFromInterval(5, 1000));
      this.setState({
        array: larray,
      });
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div className="array-bar" key={index}>
            {value}
          </div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
