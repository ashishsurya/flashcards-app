import { useRecoilValue } from "recoil";
import { currentDeckAtom } from "~/atoms/currentDeckAtom";
import { DecksContainer } from "./MultipleDecksView";
import SingleDeckView from "./SingleDeckView";
import Userbadge from "./Userbadge";
import CreateNewDeckModal from "./CreateNewDeckModal";

const AppWrapper = () => {
  const currentDeck = useRecoilValue(currentDeckAtom);

  return (
    <div className="min-h-screen">
      <Userbadge />
      <CreateNewDeckModal />
      {currentDeck.deckId ? (
        <SingleDeckView deckId={currentDeck.deckId} />
      ) : (
        <DecksContainer />
      )}
    </div>
  );
};

export default AppWrapper;
