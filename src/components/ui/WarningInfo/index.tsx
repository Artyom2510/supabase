import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/slices/contactSlice';

import Button from '../Button';

import styles from './WarningInfo.module.scss';

type WarningInfoProps = {
	hide: () => void;
};

const WarningInfo: FC<WarningInfoProps> = ({ hide }) => {
	const dispatch = useDispatch();

	const handleDeleteContact = () => {
		dispatch(deleteContact(hide));
	};

	return (
		<div className={styles.warning}>
			<p className={styles.warning__desc}>
				Are you sure to delete this contact?
			</p>
			<div className={styles.btns}>
				<Button className={styles.btns__btn} handleClick={handleDeleteContact}>
					Yes
				</Button>
				<Button handleClick={hide}>No</Button>
			</div>
		</div>
	);
};

export default WarningInfo;
