import React, { Component } from 'react';

class Time extends Component {
    //1.Provides Initial Value

    constructor(props) {
        super(props);
        this.state = {
            Time : new Date ()
        }
    }

    tike = () => {
        this.setState({
            Time : new Date()
        })
    }
    //3.sent reqvest to a servar for data.

    componentDidMount =() => {
        setInterval (() => this.tike (),1000)
    }

    //2.Disply on the scren .whenever sate value changed render method is called
    render() {
        return (
            <div>
                <p>{this.state.Time.toLocaleTimeString()}</p>
            </div>
        );
    }

}

export default Time;