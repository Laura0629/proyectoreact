//Padre de todos nuestros componentes

import React, { Component } from 'react';
import './App.css';
import Resultado from './components/Resultado';
import Salida from "./components/Salida";


class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""

            //this.state se pasa a nuestro componente de resultado.
            //Esto nos permitirá manipular nuestra pantalla.
        }
    }

    //La función onclick, lee el argumento, que es el nombre del botón en el que se hizo clic,
    // y cambia el estado de manera apropiada dependiendo de la entrada que se pasa.

    onClick = button => {
        if (button === "=") {
            this.calculate()
            //this.Calculate => Calcula el resultado de nuestra expresión, esto se dispara, cuando se presiona el botón “=”.
        }

        else if (button === "C") {
            this.reset()
            //this.Reset => Limpia nuestra salida, esto se activa cuando se presiona “C”.
        }
        else if (button === "CE") {
            this.backspace()
            //this.Backspace Limpia el último carácter que se presionó. activado en "CE".
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    //Componentes secundarios
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <br></br>
                    <Resultado result={this.state.result} />
                    <Salida onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;