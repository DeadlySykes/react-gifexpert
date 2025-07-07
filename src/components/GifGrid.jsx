import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3> { category } </h3>
        {
          isLoading && (<h2>Cargando...</h2>)
          // isLoading ? (<h2>Cargando...</h2>) : null
        }
        
        <div className="card-grid"> 

          { images.map( ( image ) => (
                <GifItem 
                  key={ image.id }
                  { ...image }
                />
            ))
          }
        </div>
    </>
  )
}



// import { useState, useEffect } from 'react';
// import { GifItem } from './GifItem';
// import { useFetchGifs } from '../hooks/useFetchGifs';

// export const GifGrid = ({ category }) => {

//   const { images, isLoading } = useFetchGifs( category );
  
//   return (
//     <>
//         <h3> { category } </h3>
//         <div className="card-grid"> 
//           {/* El return esta implicito cuando haces esto
//               ({ id, title, url }) => ( html )
//           */}
//           {/* { images.map( ({ id, title, url }) => ( 
//             <GifItem 
//                   key={ image.id } 
//                   title={ title } 
//                   url={ url }
//                 />
//             )*/}
//             {/* Operador spreed para esparcir todas las propiedades del image  */}
//           { images.map( ( image ) => (
//                 <GifItem 
//                   key={ image.id }
//                   { ...image }
//                 />
//             ))
//           }
//         </div>
//     </>
//   )
// }
