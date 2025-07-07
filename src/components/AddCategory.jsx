import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();
    // const onInputChange = ( event ) => {
    const onInputChange = ({ target }) => {
        // console.log( target.value );
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        // event.preserve
        event.preventDefault(); // Evita que se recargue la pagina al enviar el formulario
        // console.log(inputValue);
        // Generar un callback para agregar una nueva categoria
        // Obtiene las categorias en el estado actual y agrega la nueva categoria al inicio
        if( inputValue.trim().length <= 1 ) return; // Evita agregar categorias vacias o con un solo caracter
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() ); // Llama al callback con el valor del input
        setInputValue(''); // Limpia el input despues de enviar el formulario
    };

    return (
        // <form onSubmit = { (event) => onSubmit(event) }>
        <form onSubmit = { onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value = { inputValue || '' } // Asegura que el valor del input sea una cadena vacia si inputValue es undefined
                onChange = { onInputChange }
            // onChange = { (event) => onInputChange(event)}
            />
        </form>
    )
}
