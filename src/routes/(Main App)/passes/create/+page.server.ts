import { redirect, fail } from '@sveltejs/kit';

export const load = ( ( ) => {
    
    return {
    };
});

export const actions = {

    submit: async ({ request, cookies }) => {

		const data = await request.formData();

		const depart: any = data.get('depart');
        const dest: any = data.get('dest');
    
        const errors = {depart: false, dest: false};
        if(!depart) errors.depart = true;
        if(!dest) errors.dest = true;
        
        if(errors.depart || errors.dest) return fail(400, errors);

        throw redirect(303, '/passes/activepass');
    }
}
