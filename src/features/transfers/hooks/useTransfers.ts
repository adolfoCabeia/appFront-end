"use client"
import { useQuery } from "@tanstack/react-query";
import { TransfersService } from "../services/transfers.service";

export function useTransfers() {
  return useQuery({
    queryKey: ["transfers"],
    queryFn: TransfersService.getAll,
  });
}