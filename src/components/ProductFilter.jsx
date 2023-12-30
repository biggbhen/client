import React from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addTocart } from '../app/features/products/ProductSlice';

const ProductFilter = ({ data }) => {
	const dispatch = useDispatch();

	const updateState = (selectedItem) => {
		dispatch(addTocart(selectedItem));
	};

	return (
		<div className='mt-[2rem]'>
			<h3 className=' font-bold  text-[1.5rem] mb-4'>Most popular</h3>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
				{data.length > 0
					? data.map((item, ind) => (
							<ProductCard key={ind} item={item} updateState={updateState} />
					  ))
					: 'No Food In the Kitchen'}
			</div>
		</div>
	);
};

export default ProductFilter;
