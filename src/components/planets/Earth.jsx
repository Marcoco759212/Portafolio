import React from 'react';
import AmericanContinent from '../../images/Continente americano.png'

const Earth = () => {
    return (
        <div className='earth-content'>
            <div className='earth'>

            </div>
            <img src={AmericanContinent}
                className='earth-american'
                alt=''
            />
        </div>
    );
}

export default Earth;
