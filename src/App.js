import React from "react";
import Form from "./Form";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Form />
                </div>
                <div className="row">
                    <Form />
                </div>
            </div>

        )
    }
}