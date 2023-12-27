import React from 'react';
import ProductCard from './ProductCard';

const ProductFilter = ({ data }) => {
	return (
		<div className='mt-[2rem] '>
			<h3 className=' font-bold  text-[1.5rem] mb-4'>Most popular</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
				{data.map((item, ind) => (
					<ProductCard key={ind} item={item} />
				))}
			</div>
		</div>
	);
};

export default ProductFilter;
