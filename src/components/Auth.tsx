import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import { supaBaseClient } from '../clients';
import { setUser } from '../redux/slices/userSlice';

export const Auth: FC = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const { data } = supaBaseClient.supabase.auth.onAuthStateChange(
			(_, session) => {
				if (session) {
					const { user } = session;
					dispatch(setUser(user));
				}
			}
		);

		return () => {
			data && data.unsubscribe();
		};
	}, []);

	return <>{children}</>;
};
