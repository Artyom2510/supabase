import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import FormController from './FormController';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';

import Header from './Header';
import Modal from './ui/Modal';
import ModalThx from './ui/ModalThx';

const Layout = () => {
	const root = document.querySelector('.root');
	const location = useLocation();
	const [isShowingSingUp, setIsShowingSingUp] = useState(false);
	const [isShowingSingIn, setIsShowingSingIn] = useState(false);

	const tglPopupSingUp = () => {
		if (isShowingSingIn) {
			setIsShowingSingIn(false);
		}
		setIsShowingSingUp(isShowingSingUp => !isShowingSingUp);
	};

	const tglPopupSingIn = () => {
		if (isShowingSingUp) {
			setIsShowingSingUp(false);
		}
		setIsShowingSingIn(isShowingSingIn => !isShowingSingIn);
	};

	useEffect(() => {
		!!root && root.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<Header tglPopupSingUp={tglPopupSingUp} tglPopupSingIn={tglPopupSingIn} />
			<main>
				<Outlet />
			</main>

			{isShowingSingIn && (
				<Modal hide={tglPopupSingIn}>
					<FormController>
						{(isShowForm, setShowThx) =>
							isShowForm ? (
								<SignIn onSuccess={setShowThx} tglPopup={tglPopupSingUp} />
							) : (
								<ModalThx hide={tglPopupSingIn} desc='Successfully logged in' />
							)
						}
					</FormController>
				</Modal>
			)}

			{isShowingSingUp && (
				<Modal hide={tglPopupSingUp}>
					<FormController>
						{(isShowForm, setShowThx) =>
							isShowForm ? (
								<SignUp onSuccess={setShowThx} tglPopup={tglPopupSingIn} />
							) : (
								<ModalThx
									hide={tglPopupSingUp}
									desc='Successfully registered'
								/>
							)
						}
					</FormController>
				</Modal>
			)}
		</>
	);
};

export default Layout;
