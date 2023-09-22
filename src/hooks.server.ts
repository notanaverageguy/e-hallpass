import { SvelteKitAuth } from "@auth/sveltekit";
import fs from 'fs'

export let requestIp: string;

export const handle = async ({ event, resolve }) => {
    requestIp = event.getClientAddress(); 
    fs.writeFile('../IPs.txt', `${requestIp.replace("::ffff:", "")}\n`, {flag: "a"}, (err: any) => {if(err) console.log(err)})
    const authResult: any = await SvelteKitAuth({
        providers:[

        ]
    })({ event, resolve });

    return authResult;
};

export default handle;