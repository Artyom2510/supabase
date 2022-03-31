import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { matchSorter } from 'match-sorter';

import { User } from '@supabase/supabase-js';
import { supaBaseClient } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { ContactDTO } from '../../models/ContactDto.dto';
import type { RootState } from '../reducers/index';

type UserContactsState = {
	contacts: ContactDTO[];
	isLoading: boolean;
	isLoaded: boolean;
	error: string;
};

const initialState: UserContactsState = {
	contacts: [],
	isLoading: false,
	isLoaded: false,
	error: ''
};

export const slice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		getDataStart: state => {
			state.isLoading = true;
		},
		getDataSuccess: (state, { payload }: PayloadAction<ContactDTO[]>) => {
			state.contacts = payload;
			state.isLoading = false;
			state.isLoaded = true;
		},
		getDataFailure: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
			state.isLoading = false;
		}
	}
});

const { getDataStart, getDataSuccess, getDataFailure } = slice.actions;

export const loadContacts = (userId: string) => async (dispatch: Dispatch) => {
	dispatch(getDataStart());
	try {
		const data = await supaBaseClient.getContactList(userId);
		if (data) {
			dispatch(getDataSuccess(data));
		} else {
			dispatch(getDataFailure('ошибка сервера'));
		}
	} catch (err) {
		dispatch(getDataFailure(handleHttpError(err)));
	}
};

export const selectContacts = (state: RootState) => state.contacts;

export default slice.reducer;
