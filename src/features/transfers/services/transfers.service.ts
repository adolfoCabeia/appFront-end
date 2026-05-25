import { api } from "@/shared/api/api";
import { Transfer } from "../type";
import { endpoints } from "@/shared/api/endpoints";

export const TransfersService = {
  getAll: async (): Promise<Transfer[]> => {
    const res = await api.get(endpoints.transfers);

    return res.data.response.transfers;
  },
};