import React from "react";
import axios from "axios";

class About extends React.Component {

    constructor() {
        super();
        this.state = {persons: []}
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            });
    }

    render(){
        return (
            <div>
                <h3>About</h3>
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }

}

export default About;
