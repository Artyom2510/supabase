import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slices/userSlice';
import { supaBaseClient } from '../clients';

export const useLogOut = () => {
	const dispatch = useDispatch();

	return async () => {
		await supaBaseClient.logOut();
		dispatch(removeUser());
	};
};
