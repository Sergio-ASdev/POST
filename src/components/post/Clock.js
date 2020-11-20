import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mensaje: ""
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.date !== this.state.date){
            console.log("actualizando reloj");
            this.setState({mensaje:"Reloj actualizado"});
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return ( 
            <div>
                <h1> Hora actual! </h1>
                <h2> Son las { this.state.date.toLocaleTimeString() }. </h2>
                {this.state.mensaje != "" &&
                (<h3>{ this.state.mensaje }</h3>)}
            </div>
        );
    }
}
