import { api } from "@/shared/api/api";
import { News } from "../type";

export const NewsService = {
  getAll: async (): Promise<News[]> => {
    const res = await api.get("/news");

    return res.data.response.news;
  },
};