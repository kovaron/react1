import React from "react";

class Clock extends React.Component {

    constructor(props) {
        // always call super() with props.
        super(props);
        // state has to be initalized in the constructor,
        // state is a object
        this.state = {date: new Date()};
    }

    componentDidMount() {
        // when the first render occurs
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
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        );
    }
}

export default Clock;
