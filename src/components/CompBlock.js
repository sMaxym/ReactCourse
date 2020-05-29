import React from 'react';

class CompBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
        <h1>POOP + {this.props.text}</h1>
        );
    }
}

export default CompBlock