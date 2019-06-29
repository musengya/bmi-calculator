
import React, { Component } from "react";
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                name: "",
                weight: "",
                height: "",
                bmi: "",
                message: "",
                time: new Date().toLocaleTimeString()
            };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ticker = this.ticker.bind(this);
        this.getBMI = this.getBMI.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    componentDidMount() {
        setInterval(this.ticker, 1000);
    }

    ticker() {
        this.setState({ time: new Date().toLocaleTimeString() })
    }

    heightChange(e) {
        this.setState({ height: e.target.value });
        e.preventDefault();
    }
    weightChange(e) {
        this.setState({ weight: e.target.value });
        e.preventDefault();
    }
    handleChange(e) {
        e.preventDefault();
        console.log(e.target);
        this.setState({ name: e.target.value });
    }
    getBMI(e) {
        this.calculateBMI();
    }

    calculateBMI() {
        let bmi = (this.state.weight / this.state.height / this.state.height);
        let message = "";
        if (bmi >= 18.5 && bmi <= 24.99) {
            message = "You are in a healthy weight range";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            message = "You are overweight";
        }
        else if (bmi >= 30) {
            message = "You are obese";
        }
        else if (bmi < 18.5) {
            message = "You are under weight";
        }
        this.setState({ message: message });
        this.setState({
            bmi: bmi
        })


    }

    handleSubmit(e) {
        e.preventDefault();
        this.calculateBMI();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>BMI Calculator</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your name
            </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label>
                        <br />
                        Enter your weight in kgs:
            </label>
                    <input
                        type="text"
                        name="weight"
                        value={this.state.weight}
                        onChange={this.weightChange}
                    />
                    <label>
                        <br />
                        Enter your height in metres:
            </label>
                    <input
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.heightChange}
                    />

                    <br />
                    <input
                        type="submit"
                        value="Submit"
                    />
                    <br /> <br />
                    <label style={{ fontWeight: "normal" }}>
                        Hello {this.state.name}, <br />
                        It's currently  {this.state.time}  where you are living. <br />
                        Your BMI is {this.state.bmi} <br />
                    </label>
<br />
                    <div className="bmirange">
                        <div>
                            Obese: <span className="range">30 or more</span>
                        </div>
                        <div>
                            Overweight: <span className="range">25 to 29.9</span> 
                        </div>
                        <div>
                            Normal: <span className="range">18.5 to 24.9</span>
                        </div>
                        <div>
                            Underweight: <span className="range">18.4 and below</span>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
export default App;


