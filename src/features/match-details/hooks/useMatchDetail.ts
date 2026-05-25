"use client"

import { useQuery } from "@tanstack/react-query";
import { MatchDetailService } from "../service/matchDetail.service";

export function useMatchDetail(id: string) {
  return useQuery({
    queryKey: ["match-detail", id],
    queryFn: () => MatchDetailService.getById(id),
    enabled: !!id,
  });
}