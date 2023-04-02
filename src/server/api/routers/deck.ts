import { createTRPCRouter, privateProcedure } from "../trpc";
import z from "zod";
export const deckRouter = createTRPCRouter({
  getAllDecks: privateProcedure.query(async ({ ctx }) => {
    const decks = await ctx.prisma.deck.findMany({
      where: { authorId: ctx.userId },
      orderBy: [{ createdAt: "desc" }],
    });

    return decks;
  }),
  getDeckWithAllFlashcardsByDeckId: privateProcedure
    .input(z.object({ deckId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const deck = await ctx.prisma.deck.findFirst({
        where: { id: input.deckId },
        include: { flashcards: true },
      });

      return deck
    }),
  
  
});
