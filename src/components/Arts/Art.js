import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import { Link } from 'react-router-dom'


function ArtPiece ({ art, setSelectedImg }) {


    return (
        <div className='art' key={art.id}>
            <Link to={`details/${art.id}`}>
                <img className='art-image' src={art.url} alt={`${art.title} art`} width='100%' />
                <h1> {art.createdAt.seconds} </h1>
            </Link>
        </div>
    )
}



export default function Art({ art, setSelectedImg }) {
    return (
        <div className='artContainer'>
            {art.map(arts => (
                <ArtPiece 
                    key={arts.id}
                    art={arts}
                    setSelectedImg={setSelectedImg}
                />                
            ))}
        </div>
    )
}

