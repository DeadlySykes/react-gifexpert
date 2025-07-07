import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState( [] );
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async ( category ) => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }
  
  useEffect(() => {

    getImages( category );

  }, []);
    return {
        images,
        isLoading
    }
}





// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';


// export const useFetchGifs = ( category ) => {
//   const [images, setImages] = useState( [] );
//   const [isLoading, setIsLoading] = useState( true );

//   const getImages = async ( category ) => {
//     const newImages = await getGifs( category );
//     setImages(newImages);
//     setIsLoading(false);
//   }
//   //useEfect para ejecutar efectos secundarios cuando se cambie o actualice el componente
//   useEffect(() => {
//     // first
//     getImages( category );
//     // getGifs( category )
//     //   .then( newImages => setImages(newImages) );
//     /* return () => {
//       // second
//       // Cleanup function if needed
//     }; */
//   }, [/* third */]);
//     return {
//         images,
//         isLoading
//     }
// }
