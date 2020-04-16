import React from 'react'
import Clock from './Clock'

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showClock: false, text: "Show me the clock!"};
        // this is needed, so this will work in the method below.
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return (
            <div className="text-center">
                <div className="row">
                    <div className="col">
                        <div>Hello, {this.props.name} --> {this.modify()} </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-primary"
                            onClick={this.onButtonClick}>
                            {this.state.text}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Clock showClockAsProps={this.state.showClock}/>
                    </div>
                </div>
            </div>
        );
    }

    modify() {
        return this.props.name + "!!!";
    }

    onButtonClick() {
        // by default "this" is not known in a callback method, see constructor
        console.log("State before: " + JSON.stringify(this.state));
        // state and props in state should be used in a functional form
        // not like this.state, or this.props
        this.setState(state => ({
            showClock: !state.showClock,
            text: !state.showClock ? "Hide the clock" : "Show me the clock!"
        }));
    }

    // TODO create a subcomponent, which displays the SEX of the subject (in props)
    // if "Béla" -> MALE, else FEMALE
}

export default Hello;
