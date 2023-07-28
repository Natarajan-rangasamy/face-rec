import 'tachyons';
import React from 'react';
import brain from './Image/brain.png';
import Tilt from 'react-parallax-tilt';


function logos(){
    return(
        <div className=''>
            <Tilt>
                <img src='brain.png' alt='logo'/>
            </Tilt>
        </div>
    )
}
