import { Component } from "react";
export class CalculateAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null
    };
  }
  calculateAge = () => {
    const givenDate = document.getElementById("date").value;
    let date = new Date();
    const curryear = date.getFullYear();
    const currmonth = date.getMonth();
    const currdate = date.getDate();
    let arr = givenDate.split("-");
    const givenyear = Number(arr[0]);
    const givenmonth = Number(arr[1]);
    const givendate = Number(arr[2]);
    let floatyears =
      (365 * (curryear - givenyear) +
        (currmonth - givenmonth + 1) * 30 +
        (currdate - givendate)) /
      365;
    if (floatyears < 0) {
      this.setState({
        age: "Please enter a valid Birthdate"
      });
    } else {
      this.setState({
        age: "You are " + parseInt(floatyears) + " Years old"
      });
    }
  };
  render() {
    return (
      <div className="container-sm">
        <h1 className="mb-3">Age Calculator</h1>
        <h6>Enter yout Date of Birth</h6>
        <input type="date" id="date" className="text-left form-group col-md-4 py-2 rounded-3 my-3"/>
        <br />
        <button className="btn my-3 text-light" style={{backgroundColor: "#0578fe", width: "140px"}} onClick={this.calculateAge}>Calculate Age</button>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
}
