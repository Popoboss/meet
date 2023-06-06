import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        noe: 32,
        errorText: ''
    }

    handleInputChanged = (event) => {
        const inputValue = event.target.value;
        if (inputValue < 0 || inputValue > 32) {
            this.setState({
                errorText: 'Please select number from 1 to 32'
            })
        } else {
            this.props.updateEvents(null, inputValue);
            this.setState({
                noe: inputValue,
                errorText: ''
            })
        }
    };

    render() {
        const { noe } = this.state;
        return (
            <div className="NumberOfEvents">
                <ErrorAlert text={this.state.errorText} />
                <h3>Number of Events:</h3>
                <input
                    className="noe-input"
                    type="number"
                    value={noe}
                    onChange={event => {
                        // this.changeNOE(event.target.value);
                        this.handleInputChanged(event);
                    }}
                >
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;