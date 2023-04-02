import { atom } from "recoil";

export interface INewDeckModalState {
  open: boolean;
}

export const newDeckModalAtom = atom<INewDeckModalState>({
  key: "newDeckModalAtom",
  default: { open: false },
});
