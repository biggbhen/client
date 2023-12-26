import React, { useEffect } from 'react';
import homeIcon from '../assets/home-icon.svg';
import starIcon from '../assets/star-icon.svg';
import pickupIcon from '../assets/pickup.svg';
import swooppersIcon from '../assets/swooppers.svg';
import tagIcon from '../assets/tag-icon.svg';
import ratingStarIcon from '../assets/rating-stars-icon.svg';
import mapImg from '../assets/map.svg';
import clockIcon from '../assets/clock-icon.svg';
import redirectIcon from '../assets/redirect-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';
import locationIcon from '../assets/location-icon.svg';
import dropDownIcon from '../assets/drop-down-icon.svg';
import progressBarOne from '../assets/progress-bar-1.svg';
import progressBarTwo from '../assets/progress-bar-2.svg';
import progressBarThree from '../assets/progress-bar-3.svg';
import progressBarFour from '../assets/progress-bar-4.svg';
import progressBarFive from '../assets/progress-bar-5.svg';
import loveEyeEmoji from '../assets/emoji_smiling_face_with_heart-eyes.svg';
import fullSmileEmoji from '../assets/emoji_grinning_face.svg';
import grinEmoji from '../assets/emoji_slightly_smiling_face.svg';
import sadEmoji from '../assets/emoji_persevering_face.svg';
import cryEmoji from '../assets/emoji_weary_face.svg';
import { data } from '../app/utils/data';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { getProducts } from '../app/features/products/ProductSlice';
import { resetLogin } from '../app/features/auth/AuthSlice';

const HomePage = () => {
	const dispatch = useDispatch();
	// const selector = useSelector(authSelector);
	useEffect(() => {
		dispatch(getProducts());
		dispatch(resetLogin());
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<div className=' mx-auto w-[90%] max-w-[1000px]'>
				<div className='flex items-center gap-x-[1rem] px-4'>
					<img src={homeIcon} alt='' className='h-[1.3rem] w-[1.3rem] ' />
					<span className='text-[#48505E]'>/</span>
					<p className='text-[#48505E]'>Pizza</p>
					<span className='text-[#48505E]'>/</span>
					<p className='text-[#48505E]'>Resturant</p>
				</div>
				<Hero />
				<div className='flex flex-col gap-x-[1rem] justify-center md_lg:justify-between md:flex-row'>
					<div className='w-full md_lg:!w-[55%]'>
						<div className='flex items-center gap-x-[1rem] sm:gap-x-[3rem]'>
							<h5 className='font-bold text-[1.4rem] sm:text-[1.6rem] '>
								The place - Admiralty
							</h5>
							<div className='w-[20%] flex gap-x-[10px]'>
								<img src={swooppersIcon} alt='swooppersIcon' />
								<p className='font-bold text-[2rem] text-[#FD6E5D] '>.</p>
								<img src={pickupIcon} alt='pickupIcon' />
							</div>
						</div>
						<div className='flex  items-center gap-x-[1.5rem] mt-6'>
							<div className='flex flex-col'>
								<p className='text-[#858D9D]'>Open until</p> <p>3:00PM</p>
							</div>
							<div className='flex flex-col'>
								<p className='text-[#858D9D]'>Delivery fee</p> <p>from #250</p>
							</div>
							<div className='flex items-center'>
								<img src={starIcon} alt='' className='mr-2' /> <span>4.5</span>
							</div>
						</div>
						<div className='flex items-center bg-[#00E3A4] h-[3rem] px-8 rounded-[.4rem] mt-6 '>
							<img src={tagIcon} alt='' className='mr-4 ' />
							<p>12 % off some selected products</p>
						</div>
						<div className='flex  flex-col py-8  rounded-[.4rem] mt-6 shadow-lg'>
							<div className='flex w-full items-center justify-between gap-[1rem] flex-col sm:flex-row px-4'>
								<div className='flex items-center flex-col'>
									<h2 className='text-[2rem] font-bold'>4.5</h2>
									<img src={ratingStarIcon} alt='icon' />
									<p>462 reviews</p>
								</div>
								<div className=''>
									<div className='flex gap-x-[10px]'>
										<img src={loveEyeEmoji} alt='' />
										<img src={progressBarOne} className='w-[80%]' alt='' />
										<span>245</span>
									</div>
									<div className='flex gap-x-[10px] '>
										<img src={fullSmileEmoji} alt='' />
										<img src={progressBarFive} className='w-[80%]' alt='' />
										<span>30</span>
									</div>
									<div className='flex gap-x-[10px]'>
										<img src={grinEmoji} alt='' />
										<img src={progressBarFour} className='w-[80%]' alt='' />
										<span>20</span>
									</div>
									<div className='flex gap-x-[10px]'>
										<img src={sadEmoji} alt='' />
										<img src={progressBarThree} className='w-[80%]' alt='' />
										<span>10</span>
									</div>
									<div className='flex gap-x-[10px]'>
										<img src={cryEmoji} alt='' />
										<img src={progressBarTwo} className='w-[80%]' alt='' />
										<span>05</span>
									</div>
								</div>
							</div>
							<div className='mt-[2rem]'>
								<div className='flex items-center justify-between mb-2 px-4'>
									<h5 className='text-[#48505E] font-bold'>Gideon O .</h5>
									<p className='text-[#667085] text-[0.75rem]'>
										August 25, 2023
									</p>
								</div>

								<div className='flex px-4 mb-2'>
									<img src={starIcon} alt='starIcon' className='mr-2 ' />
									<span className='text-[#48505E]'>4</span>
								</div>

								<p className='mb-4 text-[#667085] px-4'>
									I so much like the food, especially the turkey. It was so
									delicious. Nice <br /> packaging too.
								</p>
								<p className='text-[#6741FF] font-bold px-4'>
									See more reviews
								</p>
							</div>
						</div>
					</div>
					<div className='md_lg:w-[40%] hidden md_lg:block rounded-[.4rem]'>
						<img src={mapImg} alt='mapImg' />
						<div className='flex items-center justify-between p-4 border-b-[.5px] border-[#D9DCE2] '>
							<div className='flex items-center'>
								<img
									src={locationIcon}
									alt='locationIcon'
									className='h-[1.5rem] w-[1.5rem] mr-[10px]'
								/>
								<p className=''>
									38b, Adeyemo Doherty Street, <br /> Lekki Phase 1, Lagos
									Nigeria
								</p>
							</div>
							<img
								src={redirectIcon}
								alt='redirectIcon'
								className='h-[0.75rem] w-[0.75rem]'
							/>
						</div>
						<div className='flex items-center justify-between p-4 border-b-[.5px] border-[#D9DCE2]'>
							<div className='flex items-center'>
								<img
									src={clockIcon}
									alt='clockIcon'
									className='h-[1.5rem] w-[1.5rem] mr-[10px]'
								/>
								<p className=''>Opening Hour</p>
							</div>
							<img src={dropDownIcon} alt='dropDownIcon' />
						</div>
						<div className='flex items-center justify-between p-4'>
							<div className='flex items-center'>
								<img
									src={phoneIcon}
									alt='phoneIcon'
									className='h-[1.5rem] w-[1.5rem] mr-[10px]'
								/>
								<p className=''>+2348106744642</p>
							</div>
							<img
								src={redirectIcon}
								alt='redirectIcon'
								className='h-[0.75rem] w-[0.75rem]'
							/>
						</div>
					</div>
				</div>
				<div className='mt-[2rem] border-2 border-[red]'>
					<h3 className=' font-bold  text-[1.5rem] mb-4'>Most popular</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
						{data.map((item, ind) => (
							<ProductCard key={ind} item={item} />
						))}
					</div>
				</div>
				<div className='mt-[2rem] border-2 border-[red]'>
					<h3 className=' font-bold  text-[1.5rem] mb-4'>Most popular</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
						{data.map((item, ind) => (
							<ProductCard key={ind} item={item} />
						))}
					</div>
				</div>
				<div className='mt-[2rem] border-2 border-[red]'>
					<h3 className=' font-bold  text-[1.5rem] mb-4'>Most popular</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
						{data.map((item, ind) => (
							<ProductCard key={ind} item={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
