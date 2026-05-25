import SkeletonCard from "@/shared/components/SkeletonCard";
import { useLeagues } from "../hooks/useLeagues";
import LeagueCard from "./LeagueCard";
import style from './LeagueCard.module.css'

export default function LeaguesList() {
  const { data, isLoading } = useLeagues();

  if (isLoading)
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  );

  return (
    <div className={style.leagues}>
      {data?.map((league) => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </div>
  );
}