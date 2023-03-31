import { atom } from "recoil";

export interface ISideBarState {
  open: boolean;
}

const defaultSideBarState = { open: false };

export const sideBarAtom = atom({
  key: "sideBarAtom",
  default: defaultSideBarState,
});
