import { ArrowBack } from "@mui/icons-material";
import { useSetRecoilState } from "recoil";
import { currentDeckAtom } from "~/atoms/currentDeckAtom";
import { api } from "~/utils/api";
import { LoadingPage } from "./LoadingSpinner";
import PageHeader from "./PageHeader";
import PageLayout from "./PageLayout";

const SingleDeckView = ({ deckId }: { deckId: string }) => {
  const setCurrentDeckId = useSetRecoilState(currentDeckAtom);
  const { data, isLoading } =
    api.deck.getDeckWithAllFlashcardsByDeckId.useQuery({ deckId });

  if (isLoading) return <LoadingPage />;

  if (!data) return <div>Deck not found</div>;

  return (
    <PageLayout
      header={
        <PageHeader>
          <button
            onClick={() => setCurrentDeckId({ deckId: null })}
            title="Go to all decks"
            className="flex items-center justify-center !bg-transparent"
          >
            <ArrowBack fontSize="large"/>
          </button>
          <p>{data.title}</p>
        </PageHeader>
      }
    >
      <div>


        <h2>Flashcards</h2>



        <div id="footer">
            {/* contains small previews of all flashcards */}
        </div>
      </div>
    </PageLayout>
  );
};

export default SingleDeckView;
