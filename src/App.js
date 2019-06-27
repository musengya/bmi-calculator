import React from "react";
import Form from "./Form";
import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.getBmi = this.getBmi.bind(this);
    }
    /*computeBmi() {
        let bmiValue = (this.state.weight / this.state.height);
        this.setState({
            bmi: bmiValue
        })
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass: bmiClass });
    }*/
    getBmi(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        }
        if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        }
        if (bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        }
        if (bmi >= 30) {
            return "Obesity";
        }
    }
    
    render() {
        return (
            <div className="inputs">
                <div className="row">
                <p style={{textAlign:"center", marginLeft: "20px", fontWeight: "bold"}}>BMI CALCULATOR</p>
                    <Form label="Weight" placeholder="Enter weight in kgs" onChange={this.weightChange} />
                    <br />
                </div>
                <div className="row">
                    <Form label="Height" placeholder="Enter height in metres" onChange={this.heightChange} />
                </div>
                <div>
                    <button
                        style={{ padding: "10px", margin: "10px 0px 0px 120px" }}
                        onClick={this.handleClick}>
                        Submit
                        </button>
                </div>
               
                 <div className="row">
                    <h3>BMI = {this.state.bmi}</h3>
                </div>
                <div className="row">
                    <h3>{this.state.bmiClass}</h3>
                </div>

            </div>

        )
    }
}