import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = ( ( ) => {
    
    return {
    };
});

export const actions = {

    login: async ({ request, cookies }) => {

		const data = await request.formData();

		const name: any = data.get('name');
        const email: any = data.get('email');
        const school: any = data.get('school');

        if (!name) {
			return fail(400, { name, missing: true });
		}
        if(!(name.split(' ').length == 2) ) {
            return fail(400, { name, full_name: false });
        }
        if(!school) {
            return fail(400, { school, missing: true });
        }

        cookies.set('name', `${name.toUpperCase()}`, { path: '/', secure: false});
        cookies.set('email', `${email}`, { path: '/', secure: false});
        cookies.set('school', `${school}`, { path: '/', secure: false});

        throw redirect(303, '/passes/activepass');
    }
}
