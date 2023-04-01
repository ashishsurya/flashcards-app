import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";

export const deckRouter = createTRPCRouter({
  exampleQuery: publicProcedure.query(() => "Hello"),
  getAllDecks: privateProcedure.query(async ({ ctx }) => {
    const decks = await ctx.prisma.deck.findMany({
      where: { authorId: ctx.userId },
      orderBy: [{ createdAt: "desc" }],
    });

    console.log(decks);

    return decks;
  }),
});
