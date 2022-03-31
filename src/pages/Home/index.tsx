import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/selectors/userSelector';

import styles from './Home.module.scss';

const Home: FC = () => {
	const user = useSelector(userSelector);

	return (
		<section className={styles.home}>
			<h2 className={styles.home__title}>
				Hellow {user ? user.user_metadata?.firstName : 'User'}
			</h2>
			<p className={styles.home__desc}>Instruction</p>
		</section>
	);
};

export default Home;
