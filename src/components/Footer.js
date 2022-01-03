import React, { useState } from 'react';

export default function Footer() {
    const [footer] = useState([
        {
            foot: 'Copyright © 2021 CheffJeff. All Right Reserved'
        }
    ])
    return (
        <div style={{background:"#313843", color: "white", padding: '1.23rem', fontFamily: 'Freight', fontWeight: '700', flex: 1, position: 'fixed', left: '0', bottom: 0, width: '100%', textAlign: 'center', borderTop: 'rgb(128, 116, 116) solid 1px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <footer> {footer[0].foot}  </footer>
            </div>
        </div>
    )
}
