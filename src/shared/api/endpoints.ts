export const endpoints = {
    matches: {
        live: "/live",
        byDate: "/matches",
        detail: (id: string) => `/match/${id}`,
        stats: (id: string) => `/match/${id}/stats`,
    },

    news: "/news",

    transfers: "/transfers",

    leagues: "/leagues",
}