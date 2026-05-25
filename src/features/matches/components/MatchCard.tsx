import styles from "./MatchCard.module.css";
import { Match } from "../types";
import {
  Radio,
  Clock3,
  Flag,
  ChevronRight,
} from "lucide-react";

type Props = {
  match: Match;
};

export default function MatchCard({ match }: Props) {
  const live = match.status.started;
  const finished = match.status.finished;

  const label = live
    ? "AO VIVO"
    : finished
    ? "FINALIZADO"
    : "AGENDADO";

  return (
    <article className={styles.card}>
      <div
        className={`${styles.badge} ${
          live
            ? styles.live
            : finished
            ? styles.finished
            : styles.scheduled
        }`}
      >
        {live && <Radio size={14} />}
        {finished && <Flag size={14} />}
        {!live && !finished && <Clock3 size={14} />}
        {label}
      </div>

      <div className={styles.teams}>
        <div className={styles.team}>
          <span>{match.home.name}</span>
        </div>

        <div className={styles.score}>
          {match.home.score}
          <span>-</span>
          {match.away.score}
        </div>

        <div className={styles.team}>
          <span>{match.away.name}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <small>{match.time}</small>
        <ChevronRight size={18} />
      </div>
    </article>
  );
}