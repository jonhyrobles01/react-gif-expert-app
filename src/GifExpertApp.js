import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [ categories, setCategories ] = useState(['Dragon Ball']);
// 
// de las dos formas es correcto
	// const handleAdd = ()=> setCategories([...categories,'Naruto']);
	// const handleAdd = ()=> setCategories(cats =>[...cats,'Naruto']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories }/>
			<hr/>

			<ul>
				{
					categories.map((category)=>(
						// el key no deberia ser el indice, sirve para que react pueda renderizar
						//  mas facilmente
						<GifGrid 
							key      = { category }
							category = { category }						
						/>
					))
				}
			</ul>
		</>
	);
}

export default GifExpertApp;