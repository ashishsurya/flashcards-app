import { api } from "~/utils/api";
import LoadingSpinner from "./LoadingSpinner";

export const DecksContainer = () => {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();

  if (!data) return <div>Something went wrong.......</div>;

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  return <div className="">Group of decks</div>;
};
