export const usersKeys = {
    all: ["users"] as const,
    withId: (userId: string) => [...usersKeys.all, userId] as const,
} as const;
