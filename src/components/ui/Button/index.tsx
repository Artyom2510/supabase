import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Btn.module.scss';

type ButtonProps = {
	handleClick?: () => void;
	type?: 'button' | 'submit';
	className?: string;
	disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
	handleClick,
	type = 'button',
	className = '',
	children,
	disabled
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={cn(styles.btn, className)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
