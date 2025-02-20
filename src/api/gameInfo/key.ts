export const gameInfoKeys = {
    all: ["gameInfo"] as const,
    id: (gameId: string) => [...gameInfoKeys.all, gameId] as const,
} as const;
