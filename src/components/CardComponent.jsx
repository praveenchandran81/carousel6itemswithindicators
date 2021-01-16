import React, { Component } from 'react';
import './CardComponent.css';
 

class CardComponent extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        
        return (
            <div className='card'>
                {this.props.heading}
                <br>
                </br>
                {this.props.description}
            </div>
        );
    }
}

export default CardComponent;