import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const studentName = cookies.get('name');
	const schoolName = cookies.get('school');
	const email = cookies.get('email');
	if (!studentName || !email) {
		throw redirect(301, '/login');
	}
	return {
		studentName,
		schoolName
	};
};
