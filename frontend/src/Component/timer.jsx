import React, { Component, useState} from 'react';

import './styles.css';


class Timer extends Component {

    
    state = {
        date: new Date()
    };

    changeTime(){
        
        setInterval(() => {
            this.setState({date:new Date()})
        }, 1000);
    }
    render(){
        return (
            <div className="App">
                <span className="horario">Horário atual: {this.state.date.toLocaleString()}</span>
                {this.changeTime()}
            </div>
        );
    }

}

export default Timer;