import { Status } from "../../@types";

export interface NavigationSliceState {
  menuItems: Item[];
  status: Status
}

export type Menu = {
  id: number;
  dataImage: string;
  title: string;
  link: string;
};

export type Item = {
  _id: number;
  title: string;
  link: string;
  dataImage: string;
  submenu: Menu[];
};
