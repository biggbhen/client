import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/DoDisturbOnRounded';
import AddIcon from '@mui/icons-material/AddCircleRounded';
import { useSelector, useDispatch } from 'react-redux';
import { productSelector } from '../app/utils/selectors/selectors';
import { removeFromCart } from '../app/features/products/ProductSlice';

const CartCard = ({ item }) => {
	const selector = useSelector(productSelector);
	const dispatch = useDispatch();
	const [count, setCount] = React.useState(0);
	const updateCount = () => {
		setCount(count + 1);
	};
	const reduceCount = () => {
		if (count <= 0) {
			setCount(0);
		} else {
			setCount(count - 1);
		}
	};
	return (
		<div className='border-b  min-h-[100px] flex px-[10px] py-[20px] items-center gap-x-[1rem]'>
			<img
				src={item.productImage}
				alt='icon'
				className='w-[80px] h-[80px] rounded-[12px]'
			/>
			<div className='min-h-[80px] grow '>
				<h2 className='text-[0.9rem] flex justify-between items-center'>
					{item.name}{' '}
					<Tooltip
						title='remove'
						onClick={() => dispatch(removeFromCart(item))}>
						<IconButton>
							<ClearIcon />
						</IconButton>
					</Tooltip>
				</h2>
				<p className='text-[0.8rem] mb-[10px]'>{item.description}</p>
				<div className='text-[0.9rem] flex justify-between items-center'>
					<p className='text-[orange]'>{`N${item.salesPrice}`}</p>
					<p className='flex gap-x-[10px]'>
						<RemoveIcon
							sx={{ color: 'orange', cursor: 'pointer' }}
							onClick={reduceCount}
						/>
						<span>{count}</span>
						<AddIcon
							sx={{ color: 'orange', cursor: 'pointer' }}
							onClick={updateCount}
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
