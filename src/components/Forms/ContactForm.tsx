import React, { FC } from 'react';
import { userSelector } from '../../redux/selectors/userSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import Input from '../ui/Input';
import {
	createNewContact,
	selectFormContact,
	updateContact
} from '../../redux/slices/contactSlice';
import Spinner from '../ui/Spinner';
import Button from '../ui/Button';
import { ContactDTO } from '../../models/ContactDto.dto';

import styles from './Form.module.scss';

type ContactPops = {
	onSuccess: () => void;
};

const schema = yup.object().shape({
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	email: yup.string().email().required()
});

const ContactForm: FC<ContactPops> = ({ onSuccess }) => {
	const dispatch = useDispatch();
	const { isSending, currentContact } = useSelector(selectFormContact);
	const user = useSelector(userSelector);
	const { id, first_name, last_name, email } = currentContact;

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ContactDTO>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const onSubmit = handleSubmit(data => {
		if (id) {
			dispatch(
				updateContact({ ...data, id }, () => {
					onSuccess();
				})
			);
		} else {
			const user_id = user?.id;
			dispatch(
				createNewContact({ ...data, user_id }, () => {
					onSuccess();
				})
			);
		}
	});

	return (
		<form className={styles.form} noValidate onSubmit={onSubmit}>
			<h3 className={styles.form__title}>Create new contact</h3>
			<div className={styles.form__fields}>
				<Input
					className={styles.form__field}
					autoFocus={true}
					error={errors.first_name?.message}
					{...register('first_name')}
					placeholder='firstName'
					label='firstName'
					defaultValue={first_name}
				/>
				<Input
					className={styles.form__field}
					error={errors.last_name?.message}
					{...register('last_name')}
					placeholder='lastName'
					label='lastName'
					defaultValue={last_name}
				/>
				<Input
					className={styles.form__field}
					type='email'
					error={errors.email?.message}
					{...register('email')}
					placeholder='email'
					label='Email'
					defaultValue={email}
				/>
			</div>
			{isSending ? (
				<Spinner />
			) : (
				<Button type='submit' className={styles.form__submit}>
					{id ? 'Save' : 'Create'}
				</Button>
			)}
		</form>
	);
};
export default ContactForm;
