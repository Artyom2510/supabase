import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import cn from 'classnames';

import Input from '../ui/Input';
import Button from '../ui/Button';
import {
	selectFormSignIn,
	sendFormSignIn
} from '../../redux/slices/formSliceSignIn';

import styles from './Form.module.scss';
import Spinner from '../ui/Spinner';

export type InputsSignIn = {
	email: string;
	password: string;
};

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6).required()
});

type SignInProps = {
	onSuccess: () => void;
	tglPopup: () => void;
};

const SignIn: FC<SignInProps> = ({ onSuccess, tglPopup }) => {
	const dispatch = useDispatch();
	const { isSending, error } = useSelector(selectFormSignIn);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<InputsSignIn>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const onSubmit = handleSubmit(data => {
		dispatch(
			sendFormSignIn(data, () => {
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
					type='email'
					error={errors.email?.message}
					{...register('email')}
					placeholder='email'
					label='Email'
					readOnly={isSending}
				/>
				<Input
					className={styles.form__field}
					type='password'
					error={errors.password?.message}
					{...register('password')}
					placeholder='password'
					label='Password'
					readOnly={isSending}
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
							Sing In
						</Button>
						<Button className={styles.form__submit} handleClick={tglPopup}>
							Sing Up
						</Button>
					</>
				)}
			</div>
		</form>
	);
};

export default SignIn;
