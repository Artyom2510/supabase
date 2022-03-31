import React, { FC } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { ContactDTO } from '../../models/ContactDto.dto';
import ButtonWithImage from '../ui/ButtonWithImage';

import DeleteIcon from '../../assets/img/icons/trash.svg';
import EditIcon from '../../assets/img/icons/edit.svg';

import styles from './Contact.module.scss';
import {
	deleteContact,
	setCurrentContact
} from '../../redux/slices/contactSlice';

interface ContactProps extends ContactDTO {
	className: string;
	tglPopupContact: () => void;
}

const Contact: FC<ContactProps> = ({
	className,
	id,
	first_name,
	last_name,
	email,
	tglPopupContact
}) => {
	const dispatch = useDispatch();

	const editPopup = () => {
		dispatch(setCurrentContact({ id, first_name, last_name, email }));
		tglPopupContact();
	};

	const delContact = () => {
		dispatch(deleteContact(id as number));
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
					handleClick={editPopup}
				>
					<img src={EditIcon} alt='Edit' />
				</ButtonWithImage>
				<ButtonWithImage
					type='delete'
					className={styles.contact__btn}
					handleClick={delContact}
				>
					<img src={DeleteIcon} alt='Delete' />
				</ButtonWithImage>
			</div>
		</li>
	);
};

export default Contact;
