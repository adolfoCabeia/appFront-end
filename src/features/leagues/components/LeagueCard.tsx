import styles from "./LeagueCard.module.css";
import { League } from "../type";
import {
  ChevronRight,
  Globe,
  Trophy,
} from "lucide-react";

type Props = {
  league: League;
};

export default function LeagueCard({ league }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logoBox}>
          <img
            src={league.logo}
            alt={league.name}
            className={styles.logo}
          />
        </div>

        <div className={styles.titleBlock}>
          <h3 className={styles.title}>
            {league.name}
          </h3>

          <div className={styles.meta}>
            <Globe size={14} />
            {league.ccode}
          </div>
        </div>

        <Trophy
          size={20}
          className={styles.icon}
        />
      </div>

      <div className={styles.footer}>
        <button className={styles.action}>
          Ver Liga
          <ChevronRight size={18} />
        </button>
      </div>
    </article>
  );
}