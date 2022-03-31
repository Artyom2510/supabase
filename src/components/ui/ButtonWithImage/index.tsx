import React, { FC } from 'react';
import cn from 'classnames';

import styles from './ButtonWithImage.module.scss';

type ButtonWithImageProps = {
	handleClick?: () => void;
	type: 'edit' | 'delete';
	className?: string;
};

const ButtonWithImage: FC<ButtonWithImageProps> = ({
	handleClick,
	children,
	type,
	className = ''
}) => {
	return (
		<button
			onClick={handleClick}
			className={cn(className, styles.btn, {
				[styles.btn_delete]: type === 'delete',
				[styles.btn_edit]: type === 'edit'
			})}
		>
			{children}
		</button>
	);
};

export default ButtonWithImage;
