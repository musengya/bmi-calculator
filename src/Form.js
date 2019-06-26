import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <div>
                <form>
                <label>Weight</label>
                    <input type="text" placeholder="This is a palceholder" />
                    <label>Height</label>
                    <input type="text" placeholder="This is a placeholder" />
                </form>
              
            </div>
        )
    }
}