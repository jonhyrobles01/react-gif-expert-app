import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = ( category )=>{
	const [state, setState] = useState({
		data : [],
		loading : true
	});
	// el uso de useEffect nos sirve para que se renderise algun metodo solo una vez en la carga 
	// de la pagina con el segundo parametro del arreglo vacio
	useEffect(()=>{
		getGifs(category)
			.then( imgs=>{
				setState({
					data    : imgs,
					loading : false
				});
			} ); 
	},[ category ]);
	return state;
}

export default useFetchGifs;