export const usersKeys = {
    all: ["users"] as const,
    id: (userId: string) => [...usersKeys.all, userId] as const,
    allWithId: () => [...usersKeys.all, "ids"] as const,
} as const;
