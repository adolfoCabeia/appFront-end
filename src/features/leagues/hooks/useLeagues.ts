"use client"
import { useQuery } from "@tanstack/react-query";
import { LeaguesService } from "../services/leagues.service";

export function useLeagues() {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: LeaguesService.getAll,
  });
}