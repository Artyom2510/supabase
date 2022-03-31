import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	HashRouter
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { Auth } from './components/Auth';
import { GuardedRoute } from './components/GuardedRoute';

const App = () => {
	useEffect(() => {
		const updateDeviceProps = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		updateDeviceProps();
		window.addEventListener('resize', updateDeviceProps);

		return () => {
			window.removeEventListener('resize', updateDeviceProps);
		};
	}, []);

	return (
		<Router>
			<Auth>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route
							path='contacts'
							element={
								<GuardedRoute>
									<Contacts />
								</GuardedRoute>
							}
						/>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</Auth>
		</Router>
	);
};

export default App;
