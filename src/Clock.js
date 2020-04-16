import React from "react";
import NameForm from "./NameForm";

class Clock extends React.Component {

    constructor(props) {
        // always call super() with props.
        super(props);
        // state has to be initalized in the constructor,
        // state is a object
        this.state = {date: new Date(), numbers: [1, 2, 3, 4, 5]};
    }

    // https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0
    // https://hackernoon.com/hn-images/1*sn-ftowp0_VVRbeUAFECMA.png
    componentWillMount() {
        console.log("logic comes here");
    }

    componentDidMount() {
        // when the first render occurs
        // https://www.w3schools.com/jsref/met_win_setinterval.asp
        this.timerID = setInterval(
            // we call the tick method
            () => this.tick(),
            // every 1000ms aka 1s
            1000
        );
    }

    componentWillUnmount() {
        // cleanup
        clearInterval(this.timerID);
    }

    tick() {
        // always use this.setState(...), this is the only way react will
        // know about the change.
        // enough to add the changing variable in the Object, React will merge them.
        this.setState({
            date: new Date()
        });
    }

    render() {
        if (this.props.showClockAsProps) {
            return (
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            );
        }

        const listItems = this.state.numbers.map((number) =>
            <li>{number}</li>
        );

        // listItems = [<li>1</li>,...]

        return (
            <div className="text-left">
                <div className="row">
                    <div className="col">
                        <p>No clock here, bro, instead a list</p>
                    </div>
                    <div className="col">
                        <ul>{listItems}</ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <NameForm />
                    </div>
                </div>

            </div>
        );

    }
}

export default Clock;
