import styles from "./TransferCard.module.css";
import { Transfer } from "../type";
import {
  ArrowRightLeft,
  TrendingUp,
  Calendar,
  BadgeEuro,
} from "lucide-react";

type Props = {
  transfer: Transfer;
};

function formatMoney(value?: number | string | null) {
  if (!value) return "—";

  const num =
    typeof value === "string"
      ? Number(value)
      : value;

  if (Number.isNaN(num)) return "—";

  return new Intl.NumberFormat("pt-PT", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num);
}

export default function TransferCard({ transfer }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.identity}>
          <h3 className={styles.name}>
            {transfer.name}
          </h3>

          <span className={styles.position}>
            {transfer.position?.label}
          </span>
        </div>

        <ArrowRightLeft
          className={styles.transferIcon}
          size={18}
        />
      </div>

      <div className={styles.route}>
        <span className={styles.club}>
          {transfer.fromClub}
        </span>

        <ArrowRightLeft
          className={styles.routeIcon}
          size={16}
        />

        <span className={styles.club}>
          {transfer.toClub}
        </span>
      </div>

      <div className={styles.values}>
        <div className={styles.value}>
          <BadgeEuro size={15} />
          {formatMoney(transfer.fee?.value)}
        </div>

        <div className={styles.market}>
          <TrendingUp size={15} />
          {formatMoney(transfer.marketValue)}
        </div>
      </div>

      <div className={styles.footer}>
        <Calendar size={14} />
        {new Date(
          transfer.transferDate
        ).toLocaleDateString("pt-PT")}
      </div>
    </article>
  );
}