import React, { Component } from 'react';

class componentName extends Component {
    //TODO: Hacer este botón reutilizable.
    // Este boton colapsa el shopping cart del header, la funcionalidad de colapsar el div no esta hecha por react si no que la entrega bootstrap

    render() {
        return (
            <button className="btn btn-primary btn-lg " type="button" data-toggle="collapse" data-target="#sidebar-cart" aria-expanded="false" aria-controls="collapseExample">
                Carro de compra
            </button>

        );
    }
}

export default componentName;