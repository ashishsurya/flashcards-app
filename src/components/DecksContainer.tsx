import { api } from "~/utils/api";
import LoadingSpinner from "./LoadingSpinner";

export const DecksContainer = () => {
  const { data, isLoading } = api.deck.getAllDecks.useQuery();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner size={60} />
      </div>
    );

  if (!data || data.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
        No decks, create some
      </div>
    );

  console.log(data);

  return (
    <div className="min-h-screen px-9 pt-40 md:pt-10">
      <p className="border-b border-slate-300 pb-6 text-5xl">Decks,</p>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-4">
        {[...data, ...data, ...data].map((deck) => (
          <div key={deck.id} className="grid place-items-center border p-10">
            {deck.title}
          </div>
        ))}
      </div>
    </div>
  );
};
