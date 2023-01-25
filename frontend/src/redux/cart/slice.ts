import {createSlice} from "@reduxjs/toolkit";
import {addToCart, fetchCart, removeFromCart, updateQuantity} from "./asyncCart";
import {Status} from "../../@types";
import {CartGroup, CartSliceState} from "./types";

const initialState: CartSliceState = {
	visitor: {
		products: [],
		token: '',
		_id: ''
	},
	status: Status.LOADING,
};

const rejectionItemsReducer = (state: CartSliceState) => {
	state.visitor = {
		products: [],
		token: '',
		_id: ''
	};
	state.status = Status.ERROR;
};

const pendingItemsReducer = (state: CartSliceState) => {
	state.status = Status.LOADING;
};

const fulfilledItemsReducer = (state: CartSliceState, action: { payload: CartGroup; }) => {
	state.visitor = action.payload;
	state.status = Status.SUCCESS;
};

export const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		//actions
	},
	// createAsyncThunk
	extraReducers: (builder) => {
		// fetchCart start
		builder.addCase(fetchCart.pending, pendingItemsReducer);
		builder.addCase(fetchCart.fulfilled, fulfilledItemsReducer);
		builder.addCase(fetchCart.rejected, rejectionItemsReducer);
		// fetchCart end

		//addToCart start
		builder.addCase(addToCart.pending, pendingItemsReducer);
		builder.addCase(addToCart.fulfilled, fulfilledItemsReducer);
		builder.addCase(addToCart.rejected, rejectionItemsReducer);
		//addToCart end

		//removeFromCart start
		builder.addCase(removeFromCart.pending, pendingItemsReducer);
		builder.addCase(removeFromCart.fulfilled, fulfilledItemsReducer);
		builder.addCase(removeFromCart.rejected, rejectionItemsReducer);
		//removeFromCart end

		// updateQuantity start
		builder.addCase(updateQuantity.pending, pendingItemsReducer);
		builder.addCase(updateQuantity.fulfilled, fulfilledItemsReducer);
		builder.addCase(updateQuantity.rejected, rejectionItemsReducer);
		// updateQuantity end
	},
});

export default slice.reducer;
