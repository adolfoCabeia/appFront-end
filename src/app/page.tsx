"use client";

import dynamic from "next/dynamic";
import styles from "./home.module.css";

const NewsList = dynamic(
  () => import("@/features/news/components/NewsList"),
  {
    loading: () => <p>A carregar notícias...</p>,
  }
);

const LeaguesList = dynamic(
  () => import("@/features/leagues/components/LeaguesList"),
  {
    loading: () => <p>A carregar ligas...</p>,
  }
);

const MatchesList = dynamic(
  () => import("@/features/matches/components/MatchesList"),
  {
    loading: () => <p>A carregar jogos...</p>,
  }
);

const TransfersList = dynamic(
  () => import("@/features/transfers/components/TransfersList"),
  {
    loading: () => <p>A carregar transfers...</p>,
  }
);

export default function HomePage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.left}>
        <div className={styles.panelTitle}>Ligas</div>

        <LeaguesList />
      </aside>

      <main className={styles.center}>
        <section className={styles.heroNews}>
          <NewsList />
        </section>
        <section className={styles.matches}>
          <div className={styles.sectionTitle}>
            Jogos de Hoje
          </div>

          <MatchesList
            date={new Date()
              .toISOString()
              .slice(0, 10)
              .replace(/-/g, "")}
          />
        </section>
      </main>
      <aside className={styles.right}>
        <div className={styles.panelTitle}>Transfers</div>

        <TransfersList />
      </aside>
    </div>
  );
}