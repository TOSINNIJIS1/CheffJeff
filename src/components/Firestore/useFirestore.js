import { useState, useEffect } from 'react';
import { artFirestore } from './firebase';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [about, setAbout] = useState([]);


    useEffect(() => {
        const unsub = artFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let document = [];
            snap.forEach(doc => {
                document.push({...doc.data(), id: doc.id})
            });
            setDocs(document)
            setAbout(document)

        })
        
        //cleanup
        return () => unsub();
    }, [collection])


    return { docs, about };
}

export default useFirestore;