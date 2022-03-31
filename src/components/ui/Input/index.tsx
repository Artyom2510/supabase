import React, { forwardRef, useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { UseFormRegisterReturn } from 'react-hook-form';
import cn from 'classnames';

import styles from './Input.module.scss';

type InputProps = {
	type?: 'text' | 'email' | 'password';
	autoFocus?: boolean;
	placeholder?: string;
	className?: string;
	label?: string;
	error?: string;
	readOnly?: boolean;
	defaultValue?: string;
} & Omit<UseFormRegisterReturn, 'ref'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			type = 'text',
			autoFocus = false,
			className = '',
			label = '',
			error = '',
			...props
		},
		ref
	) => {
		const id = useRef(nanoid()).current;

		return (
			<div
				className={cn(styles.formfield, className, {
					[styles.formfield_error]: !!error
				})}
			>
				{label && (
					<label htmlFor={id} className={styles.formfield__label}>
						{label}
					</label>
				)}
				<input
					ref={ref}
					type={type}
					autoFocus={autoFocus}
					autoComplete='off'
					className={styles.formfield__input}
					{...props}
				/>
				<small className={styles.formfield__error}>{error}</small>
			</div>
		);
	}
);

Input.displayName = 'Input';
export default Input;
