import SkeletonCard from "@/shared/components/SkeletonCard";
import { useMatchesByDate } from "../hooks/useMatchesByDate";
import MatchCard from "./MatchCard";
import styles from "./MatchesList.module.css";

export default function MatchesList({ date }: { date: string }) {
  const { data, isLoading } = useMatchesByDate(date);

  if (isLoading)
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  );

  return (
    <div className={styles.list}>
      {data?.map((match: any) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}