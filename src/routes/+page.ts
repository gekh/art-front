import { redirect } from '@sveltejs/kit';
import { pb } from '../pocketbase';

export function load() {
  if (pb.authStore.model) {
    throw redirect(302, '/me');
  }
}