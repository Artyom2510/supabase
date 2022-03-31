import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import Button from '../ui/Button';
import styles from './Header.module.scss';
import logoImg from '../../assets/img/logo.png';
import { userSelector } from '../../redux/selectors/userSelector';
import { useLogOut } from '../../hooks/useLogOut';

type HeaderProps = {
	tglPopupSingIn: () => void;
	tglPopupSingUp: () => void;
};

const Header: FC<HeaderProps> = ({ tglPopupSingIn, tglPopupSingUp }) => {
	const user = useSelector(userSelector);
	const logOut = useLogOut();

	return (
		<header className={styles.header}>
			<nav className={styles.headerNav}>
				<ul className={cn(styles.headerNav__list, styles.navList)}>
					<li className={styles.navList__item}>
						<NavLink to='/' className={styles.headerLink}>
							<img
								src={logoImg}
								alt='logo'
								className={styles.headerLink__img}
							/>
							<span className={cn(styles.headerLink__name, 'h4')}>Logo</span>
						</NavLink>
					</li>
					{user && (
						<li className={styles.navList__item}>
							<NavLink to='contacts' className={styles.headerLink}>
								<span className={cn(styles.headerLink__name, 'h4')}>
									Contacts
								</span>
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
			<div className={styles.headerBtns}>
				{!user ? (
					<>
						<Button
							handleClick={tglPopupSingIn}
							className={styles.headerBtns__btn}
						>
							Sing In
						</Button>
						<Button
							handleClick={tglPopupSingUp}
							className={styles.headerBtns__btn}
						>
							Sign Up
						</Button>
					</>
				) : (
					<Button handleClick={logOut} className={styles.headerBtns__btn}>
						Log out
					</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
