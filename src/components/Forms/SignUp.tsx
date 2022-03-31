import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import cn from 'classnames';

import Input from '../ui/Input';
import Button from '../ui/Button';
import {
	selectFormSignUp,
	sendFormSignUp
} from '../../redux/slices/formSliceSignUp';
import Spinner from '../ui/Spinner';

import styles from './Form.module.scss';

export type InputsSignUp = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

type SignUpProps = {
	onSuccess: () => void;
	tglPopup: () => void;
};

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required()
});

const SignUp: FC<SignUpProps> = ({ onSuccess, tglPopup }) => {
	const dispatch = useDispatch();
	const { isSending, error } = useSelector(selectFormSignUp);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputsSignUp>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const onSubmit = handleSubmit(data => {
		dispatch(
			sendFormSignUp(data, () => {
				onSuccess();
			})
		);
	});

	return (
		<form className={styles.form} noValidate onSubmit={onSubmit}>
			<h3 className={styles.form__title}>Fill the form</h3>
			<div className={styles.form__fields}>
				<Input
					className={styles.form__field}
					autoFocus={true}
					error={errors.firstName?.message}
					{...register('firstName')}
					placeholder='firstName'
					label='firstName'
				/>
				<Input
					className={styles.form__field}
					error={errors.lastName?.message}
					{...register('lastName')}
					placeholder='lastName'
					label='lastName'
				/>
				<Input
					className={styles.form__field}
					type='email'
					error={errors.email?.message}
					{...register('email')}
					placeholder='email'
					label='Email'
				/>
				<Input
					className={styles.form__field}
					type='password'
					error={errors.password?.message}
					{...register('password')}
					placeholder='password'
					label='Password'
				/>
			</div>

			<div
				className={cn(
					styles.form__btns,
					isSending && styles.form__btns_sending
				)}
			>
				{isSending ? (
					<Spinner />
				) : (
					<>
						{error && <p className={styles.form__error}>{error}</p>}
						<Button type='submit' className={styles.form__submit}>
							Sing Up
						</Button>
						<Button className={styles.form__submit} handleClick={tglPopup}>
							Sing In
						</Button>
					</>
				)}
			</div>
		</form>
	);
};

export default SignUp;
