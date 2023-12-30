import React from 'react';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CartCard from '../CartCard';
import { useSelector } from 'react-redux';
import { productSelector } from '../../app/utils/selectors/selectors';
import { toast } from 'react-toastify';

const Cart = ({ toggleDrawer, open }) => {
	const [price, setPrice] = React.useState(0);
	const prodSelector = useSelector(productSelector);
	React.useEffect(() => {
		if (prodSelector?.cartItems?.length > 0) {
			const total = prodSelector?.cartItems.reduce(
				(a, b) => a + b.salesPrice,
				0
			);
			setPrice(total);
		}
	}, [prodSelector.cartItems]);

	return (
		<Box
			className='fixed top-0 bottom-0 right-0 z-[22] shadow-md bg-white overflow-y-auto pb-[2rem]'
			sx={{
				transform: open ? 'translateX(0)' : 'translateX(100%)',
				transition: 'transform 0.3s ease-in-out',
				paddingTop: '50px',
				paddingX: '20px',
				maxWidth: '500px',
				width: '100%',
			}}>
			<Typography
				sx={{
					display: 'flex',
					alignItems: 'center ',
					fontWeight: 600,
					fontSize: '1.2rem',
					gap: '2rem',
				}}>
				<Tooltip title='back' onClick={toggleDrawer}>
					<IconButton>
						<ArrowBackIosNewIcon />
					</IconButton>
				</Tooltip>
				Cart
			</Typography>
			<Box
				sx={{
					marginTop: '1rem',
					paddingX: '15px',
					display: 'flex',
					flexDirection: ' column',
					rowGap: '1rem',
				}}>
				{prodSelector?.cartItems?.length > 0 ? (
					prodSelector?.cartItems.map((item, ind) => (
						<CartCard item={item} key={ind} />
					))
				) : (
					<p className='text-center text-[1.2rem] mt-[3rem]'>
						No items in cart
					</p>
				)}
			</Box>
			<Box className='my-[1rem] flex flex-col gap-y-[1rem]'>
				<p className='px-[20px] flex justify-between'>
					<span>Subtotal</span>
					<span>{`N${price}`}</span>
				</p>
				<p className='px-[20px] flex justify-between'>
					<span>Tax</span>
					<span>{`N${50}`}</span>
				</p>
				<p className='px-[20px] flex justify-between'>
					<span>Delivery</span>
					<span>{`N${300}`}</span>
				</p>
				<p className='px-[20px] flex justify-between'>
					<span>Total</span>
					<span>{`N${price + 350}`}</span>
				</p>
			</Box>
			<Button
				variant='outlined'
				disableElevation
				className='w-full my-[1rem]'
				onClick={() => toast.info('coming soon')}>
				Checkout
			</Button>
		</Box>
	);
};

export default Cart;
