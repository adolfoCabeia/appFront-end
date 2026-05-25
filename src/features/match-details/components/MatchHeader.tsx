import styles from "./MatchHeader.module.css";
import { MatchDetail } from "../type";

type Props = {
  match: MatchDetail;
};

export default function MatchHeader({ match }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.league}>
        {match.leagueName} • {match.countryCode}
      </p>

      <div className={styles.teams}>
        <span className={styles.team}>{match.homeTeam.name}</span>

        <strong className={styles.vs}>VS</strong>

        <span className={styles.team}>{match.awayTeam.name}</span>
      </div>
      <p className={styles.status}>
        {match.started
          ? "AO VIVO"
          : match.finished
          ? "FINALIZADO"
          : "AGENDADO"}{" "}
        • {match.matchTimeUTC}
      </p>
    </div>
  );
}