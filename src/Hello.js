import React from 'react'

class Hello extends React.Component {

    render() {
        return <div>Hello, {this.modify()} </div>;
    }

    modify(){
        return this.props.name + "!!!";
    }

    // TODO create a subcomponent, which displays the SEX of the subject (in props)
    // if "Béla" -> MALE, else FEMALE
}

export default Hello;
