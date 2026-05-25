import { api } from "@/shared/api/api";
import { League } from "../type";

export const LeaguesService = {
  getAll: async (): Promise<League[]> => {
    const res = await api.get("/leagues");

    return res.data.response.leagues;
  },
};