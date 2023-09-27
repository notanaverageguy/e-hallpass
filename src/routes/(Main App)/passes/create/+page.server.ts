import { redirect, fail } from '@sveltejs/kit';

export const load = () => {
	return {};
};

export const actions = {
	submit: async ({ request, cookies }) => {
		const data = await request.formData();
		const depart: any = data.get('departInput');
		const dest: any = data.get('destInput');

		const errors = { depart: false, dest: false };
		if (!depart) errors.depart = true;
		if (!dest) errors.dest = true;
		if (errors.depart || errors.dest) return fail(400, errors);

		cookies.set('depart', `${depart}`, { path: '/', secure: false });
		cookies.set('dest', `${dest}`, { path: '/', secure: false });
		cookies.set('time', `${Date.now()}`, { path: '/', secure: false });

		throw redirect(303, '/passes/activepass');
	}
};
