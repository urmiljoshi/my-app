import React, { Component } from 'react';

class ClassBasedDemo extends Component {

    constructor(props) {
        super(props);

        this.state ={
            cityName :'surat'
        }    
    }

    changecity =() => {
        this.setState({
           cityName :'Baroda' 
        })
        // console.log("changecity");
    }
    
    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button onClick = {() => this.changecity()}>changecity</button>
            </div>
        );
    }
    
}

export default ClassBasedDemo;