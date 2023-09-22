import type { LayoutServerLoad } from './$types';

import { redirect } from '@sveltejs/kit';

export const load = (async ( {cookies} ) => {
    const name = cookies.get('name');
    const email = cookies.get('email');
    if(!name || !email) {
        throw redirect(301, '/login');
    }
    return {
        name,
    };
}) satisfies LayoutServerLoad;