import { useSetRecoilState } from "recoil";
import { currentDeckAtom } from "~/atoms/currentDeckAtom";
import { api } from "~/utils/api";
import { LoadingPage } from "./LoadingSpinner";
import PageHeader from "./PageHeader";
import PageLayout from "./PageLayout";

export const DecksContainer = () => {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();
  const setCurrentDeck = useSetRecoilState(currentDeckAtom);

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
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-4">
        {[...data].map((deck) => (
          <div
            key={deck.id}
            onClick={() => setCurrentDeck({ deckId: deck.id })}
            className="grid cursor-pointer place-items-center border p-10 text-xl italic hover:bg-white hover:text-black"
          >
            {deck.title}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
