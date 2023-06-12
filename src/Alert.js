import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null; //children will overwrite this later
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return ( //renders text received from props in designated colour
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}
// ---------------- Info Alert subclass --------------//
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'white';
    }
}
// ---------------Error Alert subclass -------------//
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}
// ---------------Warning Alert subclass -------------//
class WarningAlert extends Alert {
    render() {
        return (
            <div className="alert" style={{ backgroundColor: 'orange' }}>
                You are currently offline. <br /> Access to the application might be limited.
            </div>
        );
    }
}

export { InfoAlert }
export { ErrorAlert }
export default WarningAlert;