import { api } from "@/shared/api/api";

export const MatchesService = {
  getByDate: async (date: string) => {
    const res = await api.get(`/matches?date=${date}`);
    return res.data.response.matches;
  },
};