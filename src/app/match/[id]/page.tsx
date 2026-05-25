"use client";

import { useParams } from "next/navigation";
import { useMatchDetail } from "@/features/match-details/hooks/useMatchDetail";
import MatchHeader from "@/features/match-details/components/MatchHeader";

export default function MatchPage() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading } = useMatchDetail(id);

  if (isLoading) return <p>A carregar jogo...</p>;

  return (
    <div style={{ padding: 20 }}>
      <MatchHeader match={data} />
    </div>
  );
}