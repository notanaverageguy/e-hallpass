import type { PageServerLoad } from './$types';

export const load = async ({ cookies }) => {
	let name = cookies.get('name');
	let email = cookies.get('email');

	return {
		name,
		email
	};
};

export const actions = {
	delete: ({ request, cookies }) => {
		cookies.delete('name', { path: '/' });
		cookies.delete('school', { path: '/' });
		cookies.delete('email', { path: '/' });
	}
};
