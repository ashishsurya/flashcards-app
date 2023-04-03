import { createTRPCRouter, privateProcedure } from "../trpc";
import z from "zod";
export const deckRouter = createTRPCRouter({
  createDeck: privateProcedure
    .input(
      z.object({
        title: z.string().min(1, { message: "Deck title cannot be empty." }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const deck = await ctx.prisma.deck.create({
        data: { authorId: ctx.userId, title: input.title },
      });

      return deck;
    }),
  getAllDecks: privateProcedure.query(async ({ ctx }) => {
    const decks = await ctx.prisma.deck.findMany({
      where: { authorId: ctx.userId },
      orderBy: [{ createdAt: "desc" }],
    });

    return decks;
  }),
  getDeckWithAllFlashcardsByDeckId: privateProcedure
    .input(z.object({ deckId: z.string().uuid({ message: "invalid id" }) }))
    .query(async ({ ctx, input }) => {
      const deck = await ctx.prisma.deck.findFirst({
        where: { id: input.deckId },
        include: { flashcards: true },
      });

      return deck;
    }),
});
