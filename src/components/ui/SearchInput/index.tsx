import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';

import styles from './SearchInput.module.scss';

type SearchInputProps = {
	className: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({ className, handleChange }) => {
	return (
		<input
			type='search'
			name='search'
			placeholder='search...'
			id='search'
			onChange={handleChange}
			className={cn(className, styles.search)}
		/>
	);
};

export default SearchInput;
