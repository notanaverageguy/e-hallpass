import type { PageServerLoad } from './$types';

export const load = (async ( { cookies }) => {

    let name = cookies.get("name");
    let email = cookies.get("email");
    
    return {
        name,
        email
    };
}) satisfies PageServerLoad;