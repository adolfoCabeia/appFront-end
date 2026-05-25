"use client";

import { useQuery } from "@tanstack/react-query";
import { MatchesService } from "../service/matches.service";

export function useMatchesByDate(date: string) {
  return useQuery({
    queryKey: ["matches", date],
    queryFn: () => MatchesService.getByDate(date),

    staleTime: 1000 * 30,

    refetchInterval: 30000,

    retry: 1,
  });
}