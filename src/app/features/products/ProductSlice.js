import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const initialState = {
	loading: 'idle',
	error: null,
	products: [],
	categories: [],
	cartItems: [],
};

export const getBaseUrls = () => {
	if (
		window.location.hostname.includes('localhost') ||
		window.location.hostname.includes('dev')
	) {
		return {
			dev: 'http://localhost:5000',
		};
	} else {
		return {
			dev: 'https://worrisome-red-viper.cyclic.app',
		};
	}
};

// get all products
export const getProducts = createAsyncThunk(
	'get/products',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');
		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				`${getBaseUrls().dev}/api/products`,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// store the user

				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);

// get all categories
export const getCategories = createAsyncThunk(
	'get/category',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');

		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				`${getBaseUrls().dev}/api/category`,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addTocart: (state, action) => {
			const isInCart = [...state.cartItems].some(
				(cartItem) => cartItem._id === action.payload._id
			);
			if (!isInCart) {
				state.cartItems = [...state.cartItems, action.payload];
				toast.success('added to cart');
			} else {
				toast.warning('Item is already in the cart');
			}
		},
		removeFromCart: (state, action) => {
			const newArr = [];
			[...state.cartItems].filter((item) => {
				if (item._id !== action.payload._id) {
					newArr.push(item);
				}
			});
			state.cartItems = newArr;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action?.payload?.response?.data.msg;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = 'success';
				state.products = action.payload;
				// state.admin = action.payload;
			})
			.addCase(getCategories.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action?.payload?.response?.data?.msg;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.loading = 'success';
				state.categories = [...action.payload];
				// state.admin = action.payload;
			});
	},
});

export default productSlice.reducer;
export const { addTocart, removeFromCart } = productSlice.actions;
