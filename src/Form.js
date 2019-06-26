import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <div className="row">
                <label>{this.props.label}</label>
                <input style={{padding:"20px", marginLeft:"10px"}}type="text" placeholder={this.props.placeholder} />
                
              
            </div>
        )
    }
}