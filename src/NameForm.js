import * as React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </div>
            </form>
        );
    }
}

export default NameForm;
