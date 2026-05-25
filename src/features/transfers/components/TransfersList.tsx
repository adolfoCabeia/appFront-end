import SkeletonCard from "@/shared/components/SkeletonCard";
import { useTransfers } from "../hooks/useTransfers";
import TransferCard from "./TransferCard";
import styles from "./TransfersList.module.css";

export default function TransfersList() {
  const { data, isLoading } = useTransfers();

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
      {data?.map((transfer, index) => (
        <TransferCard
          key={`${transfer.playerId}-${transfer.transferDate}-${index}`}
          transfer={transfer}
        />
      ))}
    </div>
  );
}