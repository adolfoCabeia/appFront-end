"use client";

import { useQuery } from "@tanstack/react-query";
import { NewsService } from "../services/news.service";

export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: NewsService.getAll,

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    refetchOnWindowFocus: false,
    retry: 1,
  });
}