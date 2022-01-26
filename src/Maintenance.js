import React from 'react';
import Maintain from './maintenance.svg'

export default function Maintenance() {
    return (
        <div className='maintain-container'>
            <div className='maintain'>
                <h1 style={{fontWeight: '100', fontFamily: 'revert'}}> MAINTENANCE IN PROGRESS!!! </h1>
                {/* <img src={Maintain} alt="" width='550'/> */}
                <div className="animation">
                    <div className="one spin-one"></div>
                    <div className="two spin-two"></div>
                    <div className="three spin-one"></div>
                </div>
            </div>
        </div>
    )
}
