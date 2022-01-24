import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import { Link } from 'react-router-dom'


function ArtPiece ({ art, setSelectedImg }) {


    return (
        <React.Fragment>
            {/* <div className='art' key={art.id}>
                <Link to={`details/${art.id}`}>
                    <img className='art-image' src={art.url} alt={`${art.title} art`} width='100%' />
                </Link>
            </div>
            <div>
            <h1 style={{color: 'white'}}> title </h1>
            </div> */}
            <div class="card art" >
  <img class="card-img-top" src={art.url} alt="Card image cap" class='art-image'  />
  <div class="card-body">
    <h5 class="card-title text-center"> {art.title}  </h5>
    <p class="card-text">{art.description} </p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>


        </React.Fragment>

    )
}



export default function Art({ art, setSelectedImg, selected }) {
    return (
        <div className='artContainer'>
            {art.filter((data) => {
                
                if (data.selected === selected ) {
                    return data.selected
                } else if (selected === "All Artwork") {
                    return data
                } 
                  
            }).map(arts => (
                <>
                <ArtPiece 
                    key={arts.id}
                    art={arts}
                    setSelectedImg={setSelectedImg}
                />   
                </>             
            ))}
        </div>
    )
}

