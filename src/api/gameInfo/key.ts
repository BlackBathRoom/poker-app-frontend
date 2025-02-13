export const gameInfoKeys = {
    all: ["gameInfo"] as const,
    withId: (gameId: string) => [...gameInfoKeys.all, gameId] as const,
} as const;
