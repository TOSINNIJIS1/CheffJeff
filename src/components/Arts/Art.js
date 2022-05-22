import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';


function ArtPiece ({ art, setSelectedImg, setSelectedTitle }) {
    if (art.selected === 'logo') {
        return [art.url].unshift()
    }


    return (
        <React.Fragment >
            <motion.div className="card art" key={art.id} 
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => {
                    setSelectedImg(art.url)
                    setSelectedTitle(art.title)
                }}
            >
                <motion.img className='art-image card-img-top'
                    src={art.url} alt={`${art.title} art`} width='100%' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    // style={{zIndex: '0'}}
                
                />
                <div className="card-body" >
                    <h5 className="card-title text-center"> {art.title}  </h5>
                    <p className="card-text " style={ !art.description ? {border: 'solid'} : {border: 'unset'} }>{art.description} </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>

        </React.Fragment>

    )
}


export default function Art({ art, setSelectedImg, selected, setSelectedTitle }) {


    const filteredArtWorks = art.filter((data) => (selected === 'All' ? data : data.select === selected))



    return (
        <div>
            <div className='length'> {filteredArtWorks.length} Artworks found on Jeff's Database </div>

            <div className='artContainer'> {filteredArtWorks
            .map(arts => (
                <React.Fragment key={arts.id.toString()}>
                    <ArtPiece 
                        key={arts.id}
                        art={arts}
                        setSelectedImg={setSelectedImg}
                        setSelectedTitle={setSelectedTitle}
                />   
                </React.Fragment>             
            ))} </div>
            
        </div>
    )
}

