import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);
    if( categories.includes(newCategory) ) return;
    
    setCategories([ newCategory, ...categories]);
  }
  // const onAddCategory = () => setCategories( cat => [...categories, "Demon Slayer"]);

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories }
          // onNewCategory = { event => onAddCategory(event) }
          onNewCategory = { (value) => onAddCategory(value) }
        />
        {/* Listado de items&Gifs */}
        {/* <button onClick={ onAddCategory } >Agregar</button> */}
          {/* <ol> */}
        {categories.map( (category) => ( <GifGrid key = { category } category = { category }/>)
            // return <li key={category} >{category}</li>;
            // (
            //   <div key={ category } >
            //     <h3> { category } </h3>
            //     <li> { category } </li>
            //   </div>
            // )
          )
        }
          {/* </ol> */}
            {/* Gif Item */}
    </>
  )
}
