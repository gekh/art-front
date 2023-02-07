import { redirect } from '@sveltejs/kit';
import { currentUser, pb } from '../pocketbase';

export function load() {
  let user;
  currentUser.subscribe(value => {
    user = value;
  });

  if (user) {
    throw redirect(302, '/me');
  }
}