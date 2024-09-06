//Private, no git tracking, auth file
//Convenient for now, allows access to pocketbase

import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

const ADMIN_EMAIL = 'cadenallen97@gmail.com';
const ADMIN_PASSWORD = '8|f9L[%`U7.6dgXs)tMrROGf;\m(rG';
export const authData = await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);

// export async function auth(){
//     const authData = await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
//     console.log(ADMIN_EMAIL + " " + ADMIN_PASSWORD);
//     return authData;
// }

