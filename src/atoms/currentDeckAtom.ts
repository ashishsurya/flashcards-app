import type { Deck } from "@prisma/client";
import { atom } from "recoil";

export interface ICurrentDeckState {
  deckId: string | null;
}

export const currentDeckAtom = atom<ICurrentDeckState>({
  key: "currentDeckAtom",
  default: { deckId: null },
});
