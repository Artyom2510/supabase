import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

import type { RootState } from '../reducers/index';
import { supaBaseClient } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { ContactDTO } from '../../models/ContactDto.dto';
import { FormState } from '../../models/FormState';

interface InitialState extends FormState {
	currentContact: ContactDTO;
}

const currentContact: ContactDTO = {
	first_name: '',
	last_name: '',
	email: '',
	id: null
};

const initialState: InitialState = {
	isSending: false,
	isSended: false,
	error: null,
	currentContact
};

export const slice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		sendDataStart: state => {
			state.isSending = true;
			state.isSended = false;
		},
		sendDataSuccess: state => {
			state.isSending = false;
			state.isSended = true;
			state.currentContact = currentContact;
		},
		sendDataFailure: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
			state.isSending = false;
			state.isSended = true;
			state.currentContact = currentContact;
		},
		setCurrentContact: (state, { payload }: PayloadAction<ContactDTO>) => {
			state.currentContact = payload;
		},
		setDefaultContact: state => {
			state.currentContact = currentContact;
		}
	}
});
const { sendDataStart, sendDataSuccess, sendDataFailure } = slice.actions;

export const { setCurrentContact, setDefaultContact } = slice.actions;

export const createNewContact =
	(data: ContactDTO, cb: () => void) => async (dispatch: Dispatch) => {
		dispatch(sendDataStart());
		try {
			const dataObj = await supaBaseClient.createContact(data);
			if (dataObj) {
				dispatch(sendDataSuccess());
				cb && cb();
			} else {
				dispatch(sendDataFailure('ошибка сервера'));
			}
		} catch (err) {
			dispatch(sendDataFailure(handleHttpError(err)));
		}
	};

export const updateContact =
	(data: ContactDTO, cb: () => void) => async (dispatch: Dispatch) => {
		dispatch(sendDataStart());
		try {
			const dataObj = await supaBaseClient.updateContact(data);
			if (dataObj) {
				dispatch(sendDataSuccess());
				cb && cb();
			} else {
				dispatch(sendDataFailure('ошибка сервера'));
			}
		} catch (err) {
			dispatch(sendDataFailure(handleHttpError(err)));
		}
	};

export const deleteContact = (id: number) => async (dispatch: Dispatch) => {
	dispatch(sendDataStart());
	try {
		const dataObj = await supaBaseClient.deleteContact(id);
		if (dataObj) {
			dispatch(sendDataSuccess());
		} else {
			dispatch(sendDataFailure('ошибка сервера'));
		}
	} catch (err) {
		dispatch(sendDataFailure(handleHttpError(err)));
	}
};

export const selectFormContact = (state: RootState) => state.contact;

export default slice.reducer;
