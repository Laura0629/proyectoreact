import React, {Component} from 'react';

//mostramos la salida (Contenido de los accesorios)
class Resultado extends Component {

    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default Resultado;

