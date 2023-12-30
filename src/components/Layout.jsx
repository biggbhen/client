import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Outlet } from 'react-router-dom';
import Cart from './layout/Cart';

const Layout = () => {
	const [state, setState] = React.useState(false);
	const toggleDrawer = () => {
		setState(!state);
	};

	return (
		<div className='pt-[120px]'>
			<Header toggleDrawer={toggleDrawer} />
			<Cart toggleDrawer={toggleDrawer} open={state} />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
