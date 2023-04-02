/* eslint-disable @next/next/no-img-element */
import { useRecoilValue } from "recoil";
import { currentDeckAtom } from "~/atoms/currentDeckAtom";
import { DecksContainer } from "./DecksContainer";
import SingleDeckView from "./SingleDeckView";
import Userbadge from "./Userbadge";

const AppWrapper = () => {
  const currentDeck = useRecoilValue(currentDeckAtom);

  return (
    <div className="min-h-screen">
      <Userbadge />

      {currentDeck.deckId ? (
        <SingleDeckView deckId={currentDeck.deckId} />
      ) : (
        <DecksContainer />
      )}
    </div>
  );
};

export default AppWrapper;
