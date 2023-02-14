import { redirect } from '@sveltejs/kit';
import { pb } from '../lib/pocketbase';

export function load() {
  if (pb.authStore.model) {
    throw redirect(302, '/me');
  }
}