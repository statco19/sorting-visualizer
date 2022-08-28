import React, { Component } from "react";
import "./SortingVisualizer.css";

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

  mergeSort() {}

  quickSort() {}

  heapSort() {}

  resetArray() {
    const larray = [];
    for (let i = 0; i < 310; ++i) {
      larray.push(randomIntFromInterval(5, 650));
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
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate new array</button>
        <button onClick={() => this.mergeSort()}>merge sort</button>
        <button onClick={() => this.quickSort()}>quick sort</button>
        <button onClick={() => this.heapSort()}>heap sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
