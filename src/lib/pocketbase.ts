import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb: PocketBase = new PocketBase(PUBLIC_POCKETBASE_URL);
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model);
});