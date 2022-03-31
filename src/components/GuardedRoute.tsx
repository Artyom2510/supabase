import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { userSelector } from '../redux/selectors/userSelector';

export const GuardedRoute: FC = ({ children }) => {
	const user = useSelector(userSelector);
	const location = useLocation();

	if (!user) {
		return <Navigate to='/' state={{ from: location }} />;
	}
	return <>{children}</>;
};
