import React from 'react';
import thumbsUp from '../assets/thumbs-up.svg';
import add from '../assets/add_food.svg';

const ProductCard = ({ item }) => {
	return (
		<div
			key={item._id}
			className=' border-[.5px] border-[#D9DCE2] flex justify-between p-[1rem]  items-center rounded-[.4rem] hover:shadow-lg '>
			<div className=' w-[12.5rem]'>
				<h4 className=' font-bold '>{item.title}</h4>
				<p className='text-[0.87rem] text-[#858D9D]'>{item.description}</p>
				<div className=' flex items-center justify-between w-[10rem] '>
					<img src={thumbsUp} alt='thumbsUp' />
					<span className='text-[0.87rem] text-[#2B2F38] font-semibold'>
						50%
					</span>
					<span className='text-[#48505E] font-extrabold mt-[-.4rem] '>
						{' '}
						.{' '}
					</span>
					<span className='text-[#EE2024] line-through text-[0.87rem] font-semibold '>
						{' '}
						{`N${item.salesPrice}`}
					</span>
					<span className='text-[0.87rem] text-[#2B2F38] font-semibold '>
						{`N${item.defaultPrice}`}
					</span>
				</div>
			</div>
			<div className='relative'>
				<img
					src={item.productImage}
					className='w-[90px] h-[90px] rounded-[8px]'
					alt='foodImg'
				/>
				<img
					src={add}
					className='w-[30px] h-[30px] absolute translate-x-[50%] right-[50%] bottom-[-15px] cursor-pointer'
					alt='foodImg'
				/>
			</div>
		</div>
	);
};

export default ProductCard;
