import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            weight: "",
            height: "",
            bmi: "",
            message: "",
            time: new Date().toLocaleTimeString()
        };
        //binding the methods used to this
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
        this.setState({ time: new Date().toLocaleTimeString() });
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
        this.setState({ name: e.target.value });
    }

    getBMI() {
        this.calculateBMI();
    }

    calculateBMI() {
        let bmi = this.state.weight / this.state.height / this.state.height;

        this.setState({
            bmi: bmi.toFixed(1)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.calculateBMI();
    }

    render() {
        const { name, weight, height, bmi } = this.state;
        const buttonDisabled = !name || !weight || !height;

        return (
            <div className="App">
                <div className="App-header">
                    <h2>BMI Calculator</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Please enter your name</label>
                    <input
                        type="text"
                        name="name"
                        data-testid="name-input"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Enter your weight in kgs:</label>
                    <input
                        type="number"
                        name="weight"
                        data-testid="weight-input"
                        value={this.state.weight}
                        onChange={this.weightChange}
                    />
                    <br />
                    <label>Enter your height in metres:</label>
                    <input
                        type="number"
                        name="height"
                        data-testid="height-input"
                        value={this.state.height}
                        onChange={this.heightChange}
                    />
                    <br />
                    <input
                        type="submit"
                        data-testid="submit-button"
                        disabled={buttonDisabled}
                        value="Submit"
                    />
                    <br />
                    <br />
                    <div data-testid="greeting-text">
                        Hello {this.state.name}
                    </div>
                    <div data-testid="current-time">
                        It's currently {this.state.time} where you are living.
                    </div>
                    <div data-testid="bmi-score">
                        Your BMI is {this.state.bmi}
                    </div>
                    <br />
                    <table className="bmirange">
                        <tbody>
                            <tr
                                data-testid="bmi-row"
                                className={bmi >= 30 ? "your-bmi" : ""}
                            >
                                <td>Obese:</td>
                                <td>30 or more</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi >= 25 && bmi <= 29.9 ? "your-bmi" : ""
                                }
                            >
                                <td>Overweight:</td>
                                <td>25 to 29.9</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi >= 18.5 && bmi <= 24.9 ? "your-bmi" : ""
                                }
                            >
                                <td>Normal:</td>
                                <td>18.5 to 24.9</td>
                            </tr>
                            <tr
                                data-testid="bmi-row"
                                className={
                                    bmi > 0 && bmi <= 18.4 ? "your-bmi" : ""
                                }
                            >
                                <td>Underweight:</td>
                                <td>18.4 and below</td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}
export default App;
