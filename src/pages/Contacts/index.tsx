import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../../components/Contact';
import Spinner from '../../components/ui/Spinner';
import { userSelector } from '../../redux/selectors/userSelector';
import cn from 'classnames';
import { matchSorter } from 'match-sorter';

import {
	selectContacts,
	loadContacts
} from '../../redux/slices/userContactsSlice';
import styles from './Contacts.module.scss';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ModalThx from '../../components/ui/ModalThx';
import FormController from '../../components/FormController';
import ContactForm from '../../components/Forms/ContactForm';
import SearchInput from '../../components/ui/SearchInput';
import {
	selectFormContact,
	setDefaultContact
} from '../../redux/slices/contactSlice';
import WarningInfo from '../../components/ui/WarningInfo';

const Contacts = () => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);
	const { currentContact } = useSelector(selectFormContact);
	const { contacts, isLoaded } = useSelector(selectContacts);
	const [showPopupCreate, setShowPopupCreate] = useState(false);
	const [showPopupWarning, setShowPopupWarning] = useState(false);
	const [searchVal, setSearchVal] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchVal(e.target.value);
	};

	const tglPopupContact = () => {
		if (showPopupCreate && !!currentContact?.id) {
			dispatch(setDefaultContact());
		}
		setShowPopupCreate(!showPopupCreate);
	};

	const tglPopupWarning = () => {
		setShowPopupWarning(!showPopupWarning);
	};

	useEffect(() => {
		user && dispatch(loadContacts(user.id));
	}, [contacts]);

	const MatchSorter = useMemo(() => {
		if (!searchVal) {
			return contacts;
		}
		return matchSorter(contacts, searchVal, {
			keys: ['first_name', 'last_name', 'email']
		});
	}, [contacts, searchVal]);

	return (
		<>
			<section className={styles.contacts}>
				<h2 className={styles.contacts__title}>Contacts</h2>
				{!isLoaded ? (
					<Spinner />
				) : (
					<>
						{contacts.length && (
							<SearchInput
								className={styles.contacts__search}
								value={searchVal}
								handleChange={handleChange}
							/>
						)}
						<Button
							className={styles.contacts__new}
							handleClick={tglPopupContact}
						>
							New contact +
						</Button>
						<>
							{contacts.length ? (
								<>
									{MatchSorter.length ? (
										<ul
											className={cn(styles.contacts__list, styles.contactsList)}
										>
											{MatchSorter.map(contact => {
												return (
													<Contact
														key={contact.id}
														{...contact}
														className={styles.contactsList__item}
														tglPopupContact={tglPopupContact}
														tglPopupWarning={tglPopupWarning}
													/>
												);
											})}
										</ul>
									) : (
										<p className={styles.contacts__desc}>No matches</p>
									)}
								</>
							) : (
								<p className={styles.contacts__desc}>Contact list is empty</p>
							)}
						</>
					</>
				)}
			</section>

			{showPopupCreate && (
				<Modal hide={tglPopupContact}>
					<FormController>
						{(isShowForm, setShowThx) =>
							isShowForm ? (
								<ContactForm onSuccess={setShowThx} />
							) : (
								<ModalThx hide={tglPopupContact} desc='Contact created' />
							)
						}
					</FormController>
				</Modal>
			)}

			{showPopupWarning && (
				<Modal hide={tglPopupWarning}>
					<WarningInfo hide={tglPopupWarning} />
				</Modal>
			)}
		</>
	);
};

export default Contacts;
