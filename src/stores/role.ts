import { writable } from 'svelte/store';
import { Role } from '../enums/Role';

export const cur_role = writable(Role.customer);