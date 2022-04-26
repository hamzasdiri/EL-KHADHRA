import React, { Component } from 'react';

const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
class Test extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        fruit: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("Fruit Selected!!");
      this.setState({ fruit: e.target.value });
      console.log(this.state);
    }
  
    render() {
      return (
        <div id="Test">
          <div className="select-container">
            <select value={this.state.fruit} onChange={this.handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }
  }
  
  export default Test;