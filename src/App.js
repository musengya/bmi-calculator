import React from "react";
import Form from "./Form";
import "./App.css"

export default class App extends React.Component {
    render() {
        return (
            <div className="inputs">
                <div className="row">
                    <Form label="Height" placeholder="Enter height in metres" /> 
                    <br />
                </div>
                <div>
                    <Form label="Weight" placeholder="Enter weight in kgs"/> 
              </div>
                
                
            </div>

        )
    }
}