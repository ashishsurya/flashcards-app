import { DecksContainer } from "~/components/DecksContainer";
import Userbadge from "~/components/Userbadge";
import { api } from "~/utils/api";

const Home = () => {
  api.deck.getAllDecks.useQuery();
  
  return (
    <div className=" min-h-screen px-8 pt-36 md:pt-10">
      <Userbadge />
      <h2 className="pl-4 text-2xl sm:text-3xl md:text-4xl">All your decks</h2>
      <DecksContainer />
    </div>
  );
};

export default Home;
