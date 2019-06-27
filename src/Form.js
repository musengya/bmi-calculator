import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            weight: "",
            height: "",
            bmi: ""
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
   
    }
    heightChange(heightValue) {
        this.setState({
            height: heightValue
        })
    }
    weightChange(weightValue) {
        this.setState({
            weight: weightValue
        })
    }
    handleClick() {
        let bmiValue = (this.state.weight / this.state.height);
        this.setState({
            bmi: bmiValue
        })
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass: bmiClass });
    }
   
    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({
            value: inputValue
        });

    }
    render() {
        return (
            <div>
                   
                <div className="row">
              
                    <form>
                <label>{this.props.label}</label>
                <input
                    style={{ padding: "20px", marginLeft: "10px" }}
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange}
                        />
                        </form>
            </div>
            
            </div>
            
        )
    }
}