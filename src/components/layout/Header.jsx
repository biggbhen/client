import React from 'react';
import menueIcon from '../../assets/menu-icon.svg';
import logo from '../../assets/my-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import dropDownIcon from '../../assets/drop-down-icon.svg';
import locationIcon from '../../assets/location-icon.svg';
import shopingCartIcon from '../../assets/shopping-cart-icon.svg';
import { useSelector } from 'react-redux';
import { productSelector } from '../../app/utils/selectors/selectors';

const Header = ({ toggleDrawer }) => {
	const prodSelector = useSelector(productSelector);
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [prevScrollPos, setPrevScrollPos] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const scrollThreshold = 120; // Adjust this threshold as needed

			setIsScrolled(currentScrollPos > scrollThreshold);
			// Check if scrolling direction is up and remove the 'up' class
			if (currentScrollPos < prevScrollPos) {
				setIsScrolled(false);
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	const items =
		prodSelector?.cartItems?.length > 0 ? prodSelector?.cartItems?.length : 0;

	const handleClick = () => {
		toggleDrawer();
	};

	return (
		<div
			className={`flex items-center justify-between py-[1rem] px-[3rem] min-h-[100px] fixed top-0 left-0 right-0 z-10 bg-white shadow-md ${
				isScrolled ? 'scrolled' : 'scrolledUp'
			}`}>
			<div className='flex items-center justify-between '>
				<img src={menueIcon} alt='menueIcon' className='pr-[1.5rem]' />
				<img
					src={logo}
					alt='logo'
					className='h-[2.5rem] w-[5rem] pr-[1.5rem]'
				/>
				<div className='pr-[1.5rem] hidden 	lg_lgx:block'>
					<div className='border-2 border-[#D9DCE2] h-[2.75rem] w-[15rem] flex items-center justify-between rounded-[.3rem] px-2 '>
						<img src={locationIcon} alt='' />
						<p className='ml-[-3rem] text-[#667085] text-[.8rem]'>
							{' '}
							23, KudiratAbiola Way
						</p>
						<img src={dropDownIcon} alt='' />
					</div>
				</div>
				<div className='relative hidden lg_lgx:flex'>
					<input
						type='text'
						placeholder='Search the place..'
						className='border-2 border-[#D9DCE2] h-[2.75rem] w-[18rem] items-center rounded-[.3rem] pl-8 text-[.8rem] '
					/>
					<img
						src={searchIcon}
						alt='searchIcon'
						className='absolute top-[50%] translate-y-[-50%] left-2'
					/>
				</div>
			</div>

			<div
				className='hidden xs:flex relative items-center justify-between py-[15px] px-[7px] rounded-[25px] h-[1.6rem] w-max bg-[#6741FF] cursor-pointer'
				onClick={handleClick}>
				<img
					src={shopingCartIcon}
					alt='shopingCartIcon'
					className='h-[1.2rem] w-[1.2rem]'
				/>
				<span className='text-[.8rem] text-white ml-[5px]'>
					{`1 basket | ${items} items`}
				</span>
				<img
					src={dropDownIcon}
					alt='dropDownIcon'
					className='h-[.5rem] w-[.5rem]'
				/>
			</div>
		</div>
	);
};

export default Header;
