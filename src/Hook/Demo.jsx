import React, { Component } from 'react';

class Demo extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
                Hai {this.props.name} Welcome 
            </div>
        );
    }
}

export default Demo;
