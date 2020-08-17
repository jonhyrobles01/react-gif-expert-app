import React, { useState } from 'react'
import PropTypes from 'prop-types';

// el componente recibe props y se hace el desestructuracion para llamar al metodo directamente
const AddCategory = ({ setCategories }) => {
	const [ inputValue, setInputValue ] = useState('');  // el useState siempre debe de recibir un estado
	// inicial para que no tenga error ya que si se deja vacio, el estado seria undefined

	const handleInputChange = (e)=>{
		setInputValue(e.target.value);
	}

	const handleSubmit = (e)=>{
		e.preventDefault(); // previene el comportamiento de recarga por defecto del navegador
		if (inputValue.trim().length > 2) {
			setCategories(cats=>[inputValue,...cats]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={ handleSubmit }>	
			<input
				type = "text"
				value = { inputValue }
				onChange = { handleInputChange }
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories : PropTypes.func.isRequired,
}

export default AddCategory