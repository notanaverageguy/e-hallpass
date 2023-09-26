import PocketBase from 'pocketbase';

//import { writeable } from 'svelte/store';

export const db = new PocketBase('http://127.0.0.1:8090');
