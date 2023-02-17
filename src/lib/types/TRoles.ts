import type { RoleType } from "$lib/enums/RoleType";
import type { TInfo } from "./TInfo";

export type TRole = {
  id: string;
  role_type: RoleType;
  name: string;
  city?: string;
  info: TInfo;
};

export type TRoles = {
  [key: string]: TRole;
};

export type TTypeGroupedRoles = {
  [key in RoleType]: Array<string>;
};