import React from 'react';

class Media extends React.Component
{
    render() {
        return 
        (
            //ESTO se llama JSX es codigo que funciona como HTML
            <div>
                <div>
                    <img 
                        src=""
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3>¿Por qué Aprender React?</h3>
                    <p>Erik Corrales</p>
                </div>
            </div>
        )
    }
}
//Exportar este archivo para usarlo en index.js
export default Media;