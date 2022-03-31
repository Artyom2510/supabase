import { createClient, User, SupabaseClient } from '@supabase/supabase-js';
import { ContactDTO } from '../models/ContactDto.dto';

const supabaseUrl = String(process.env.REACT_APP_SUPABASE_URL);
const supabaseAnonKey = String(process.env.REACT_APP_SUPABASE_ANON_KEY);

type SignUpPayload = {
	firstName: string;
	lastName: string;
	password: string;
	email: string;
};

class SupaBaseClient {
	supabase: SupabaseClient;
	constructor() {
		this.supabase = createClient(supabaseUrl, supabaseAnonKey);
	}

	getUserCred(): User | null {
		return this.supabase.auth.user();
	}

	async singIn(password: string, email: string): Promise<User> {
		const { user, error } = await this.supabase.auth.signIn({
			password,
			email
		});

		if (error) throw new Error(error.message);
		if (!user) throw new Error('user not found');

		return user;
	}

	async signUp({
		firstName,
		lastName,
		password,
		email
	}: SignUpPayload): Promise<User> {
		const { user, error } = await this.supabase.auth.signUp(
			{
				password,
				email
			},
			{
				data: {
					firstName,
					lastName
				}
			}
		);

		if (error) throw new Error(error.message);
		if (!user) throw new Error('user not found');

		return user;
	}

	async logOut() {
		return this.supabase.auth.signOut();
	}

	async getContactList(userId: string) {
		const { data, error } = await this.supabase
			.from<ContactDTO>('contact')
			.select('*')
			.match({ user_id: userId });

		return data || [];
	}

	async createContact(contact: ContactDTO) {
		const { data, error } = await this.supabase
			.from<ContactDTO>('contact')
			.insert(contact, { returning: 'representation' });

		return data?.[0];
	}

	async updateContact(contact: Partial<ContactDTO>) {
		const { id, ...rest } = contact;
		const { data, error } = await this.supabase
			.from<ContactDTO>('contact')
			.update(rest, { returning: 'representation' })
			.match({ id });

		return data?.[0];
	}

	async deleteContact(id: number) {
		const { data, error } = await this.supabase
			.from<ContactDTO>('contact')
			.delete()
			.match({ id });

		return data?.[0];
	}
}

export const supaBaseClient = new SupaBaseClient();
