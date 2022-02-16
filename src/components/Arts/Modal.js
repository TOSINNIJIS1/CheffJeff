import { motion } from 'framer-motion/dist/framer-motion';
import useFirestore from '../Firestore/useFirestore';

const Modal = ({ setSelectedImg, selectedImg, selectedTitle }) => {

  let upperTitle =selectedTitle.toUpperCase()

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  const { docs } = useFirestore('artworks')
  const title = Object.keys(docs).map(id => docs[id].title)
  // console.log(docs)

  return (
    <div className='modal-container'>
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}
      />
      {/* <div className='card head'>
        <div className='card-body'> */}
        <div className='modal-title'>
          <div className='title-container'> {upperTitle} </div>

        </div>
        {/* </div>
      </div> */}
    </motion.div>
    </div>

  )
}

export default Modal;