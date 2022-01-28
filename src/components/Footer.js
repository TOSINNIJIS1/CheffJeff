import React, { useContext } from 'react';
import { MyContextApi } from '../useContext/context'

export default function Footer() {
    const content = useContext(MyContextApi)    
    const footer = content.map(data => data.footer)
    return (
        <div className='footer'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <footer> {footer} </footer>
            </div>
        </div>
    )
}
