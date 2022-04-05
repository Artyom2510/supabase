import React, { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { ContactDTO } from '../../models/ContactDto.dto';
import ButtonWithImage from '../ui/ButtonWithImage';

import DeleteIcon from '../../assets/img/icons/trash.svg';
import EditIcon from '../../assets/img/icons/edit.svg';

import styles from './Contact.module.scss';
import {
	setCurrentContact,
	setToDeleteIdContact
} from '../../redux/slices/contactSlice';

interface ContactProps extends ContactDTO {
	className: string;
	tglPopupContact: () => void;
	tglPopupWarning: () => void;
}

const Contact: FC<ContactProps> = ({
	className,
	id,
	first_name,
	last_name,
	email,
	tglPopupContact,
	tglPopupWarning
}) => {
	const dispatch = useDispatch();

	const openDeletePopup = () => {
		id && dispatch(setToDeleteIdContact(id));
		tglPopupWarning();
	};

	const openEditPopup = () => {
		dispatch(setCurrentContact({ id, first_name, last_name, email }));
		tglPopupContact();
	};

	return (
		<li className={cn(className, styles.contact)}>
			<div className={cn(styles.contact__wrap, styles.wrap)}>
				<p className={styles.wrap__fullName}>{`${first_name} ${last_name}`}</p>
				<p className={styles.wrap__email}>{email}</p>
			</div>
			<div className={styles.contact__btnWrap}>
				<ButtonWithImage
					type='edit'
					className={styles.contact__btn}
					handleClick={openEditPopup}
				>
					<img src={EditIcon} alt='Edit' />
				</ButtonWithImage>
				<ButtonWithImage
					type='delete'
					className={styles.contact__btn}
					handleClick={openDeletePopup}
				>
					<img src={DeleteIcon} alt='Delete' />
				</ButtonWithImage>
			</div>
		</li>
	);
};

export default Contact;
