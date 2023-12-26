import React from 'react';
import menueIcon from '../../assets/menu-icon.svg';
import logo from '../../assets/my-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import dropDownIcon from '../../assets/drop-down-icon.svg';
import locationIcon from '../../assets/location-icon.svg';
import shopingCartIcon from '../../assets/shopping-cart-icon.svg';

const Header = () => {
	return (
		<div className='flex items-center justify-between py-[1rem] px-[3rem]'>
			<div className='flex items-center justify-between '>
				<img src={menueIcon} alt='menueIcon' className='pr-[1.5rem]' />
				<img
					src={logo}
					alt='logo'
					className='h-[2.5rem] w-[3.75rem] pr-[1.5rem]'
				/>
				<div className='pr-[1.5rem] hidden 	lg_lg:block'>
					<div className='border-2 border-[#D9DCE2] h-[2.75rem] w-[15rem] flex items-center justify-between rounded-[.3rem] px-2 '>
						<img src={locationIcon} alt='' />
						<p className='ml-[-3rem] text-[#667085] text-[.8rem]'>
							{' '}
							23, KudiratAbiola Way
						</p>
						<img src={dropDownIcon} alt='' />
					</div>
				</div>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search the place..'
						className='border-2 border-[#D9DCE2] h-[2.75rem] w-[18rem] flex items-center rounded-[.3rem] pl-8 text-[.8rem]'
					/>
					<img
						src={searchIcon}
						alt='searchIcon'
						className='absolute top-[50%] translate-y-[-50%] left-2'
					/>
				</div>
			</div>

			<div className='flex items-center justify-between px-2 rounded-[3rem] h-[1.6rem] w-[6.5rem] bg-[#6741FF] '>
				<img
					src={shopingCartIcon}
					alt='shopingCartIcon'
					className='h-[1rem] w-[1rem]'
				/>
				<span className='text-[.8rem] text-white'> 0 basket </span>
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
