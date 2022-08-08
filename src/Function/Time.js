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
        this.time = setInterval (() => this.tike (),1000)
    }
    
//4. Whenevar Previonvs state or Props is Updatad then it is calld .

componentDidUpdate = (prevProps,prevState) => {
    if (prevState.Time !== this.state.Time) {
        console.log("componetDidUpdate");
    }
}

//5.Whenevar We Move to another component then it is Callad .it Releuse Resources.

componentWillUnmount = () => {
    clearInterval (this.Time);
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