import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const depart: string|undefined = cookies.get('depart')?.replace(/, .+/gm, "");
	const dest: string|undefined = cookies.get('dest')?.replace(/, .+/gm, "");
	const time: string|undefined = cookies.get('time');

    return {
        depart,
        dest,
        time
    };
}) satisfies PageServerLoad;