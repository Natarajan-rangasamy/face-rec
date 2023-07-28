import 'tachyons';
import React from 'react';
import brains from './brains.png';
import Tilt from 'react-parallax-tilt';


function logos(){
    return(
        <div className='ma4 mt0 grow' style={{width:'200px', height:'200px'}}>
            <Tilt className='tc shadow-3 br4 bg-grey '>
                <div style={{ height: '200px',width: '200px',  backgroundColor: 'transparent' }}>
                    <img src={brains}  alt='logo'/>
                </div>
          </Tilt>
        </div>
    )
}
export default logos;
