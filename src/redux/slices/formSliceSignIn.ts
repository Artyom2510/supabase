import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

import type { RootState } from '../reducers/index';
import { supaBaseClient } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { InputsSignIn } from '../../components/Forms/SignIn';
import { FormState } from '../../models/FormState';

const initialState: FormState = {
	isSending: false,
	isSended: false,
	error: null
};

export const slice = createSlice({
	name: 'formSignIn',
	initialState,
	reducers: {
		sendDataStart: state => {
			state.isSending = true;
			state.isSended = false;
		},
		sendDataSuccess: state => {
			state.isSending = false;
			state.isSended = true;
		},
		sendDataFailure: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
			state.isSending = false;
			state.isSended = true;
		}
	}
});
const { sendDataStart, sendDataSuccess, sendDataFailure } = slice.actions;

export const sendFormSignIn =
	({ password, email }: InputsSignIn, cb: () => void) =>
	async (dispatch: Dispatch) => {
		dispatch(sendDataStart());
		try {
			const data = await supaBaseClient.singIn(password, email);
			if (data) {
				dispatch(sendDataSuccess());
				cb && cb();
			} else {
				dispatch(sendDataFailure('ошибка сервера'));
			}
		} catch (err) {
			dispatch(sendDataFailure(handleHttpError(err)));
		}
	};

export const selectFormSignIn = (state: RootState) => state.formSignIn;

export default slice.reducer;
