import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import formSliceSignInReducer from '../slices/formSliceSignIn';
import formSliceSignUpReducer from '../slices/formSliceSignUp';
import userContactsReducer from '../slices/userContactsSlice';
import userReducer from '../slices/userSlice';
import contactReducer from '../slices/contactSlice';

const store = configureStore({
	devTools: process.env.NODE_ENV === 'production',
	reducer: {
		user: userReducer,
		formSignIn: formSliceSignInReducer,
		formSignUp: formSliceSignUpReducer,
		contacts: userContactsReducer,
		contact: contactReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
