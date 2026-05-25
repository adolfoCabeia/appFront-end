import { api } from "@/shared/api/api";

export const MatchDetailService = {
  getById: async (id: string) => {
    const res = await api.get(`/match/${id}`);
    return res.data.response.detail;
  },
};