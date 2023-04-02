import { useSetRecoilState } from "recoil";
import { currentDeckAtom } from "~/atoms/currentDeckAtom";
import { newDeckModalAtom } from "~/atoms/newDeckModalState";
import { api } from "~/utils/api";
import { LoadingPage } from "./LoadingSpinner";
import PageHeader from "./PageHeader";
import PageLayout from "./PageLayout";

export const DecksContainer = () => {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();
  const setCurrentDeck = useSetRecoilState(currentDeckAtom);
  const setNewDeckModal = useSetRecoilState(newDeckModalAtom);

  if (isLoading) return <LoadingPage />;

  if (!data || data.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
        No decks, create some
      </div>
    );

  console.log(data);

  return (
    <PageLayout
      header={
        <PageHeader>
          <p>Decks</p>
        </PageHeader>
      }
    >
      <div className="grid grid-cols-1  gap-6 p-4 sm:grid-cols-2 md:grid-cols-4">
        <div
          onClick={() => {
            setNewDeckModal({ open: true });
          }}
          className="grid cursor-pointer place-items-center rounded-xl bg-[--bg-level-5] text-xl hover:bg-white hover:text-black  hover:shadow-lg md:p-10"
        >
          + Create a new deck
        </div>
        {[...data].map((deck) => (
          <div
            key={deck.id}
            onClick={() => setCurrentDeck({ deckId: deck.id })}
            className=" min-h-[200px] cursor-pointer flex items-center justify-center rounded-xl border text-xl italic hover:bg-white hover:text-black hover:shadow-lg md:p-10"
          >
            {deck.title}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
