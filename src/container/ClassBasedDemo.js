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
    }
    
    render() {
        return (
            <div>
                <p>{this.state.cityName}</p>
                <button>onclick = {() => this.changecity}</button>
            </div>
        );
    }
    jkkgkukfffkutcjjjhhnh
}

export default ClassBasedDemo;