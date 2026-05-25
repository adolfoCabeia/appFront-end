import styles from "./NewsCard.module.css";
import { News } from "../type";
import { Clock3, ExternalLink } from "lucide-react";

type Props = {
  news: News;
};

export default function NewsCard({ news }: Props) {
  return (
    <a
      href={news.page.url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <img
        src={news.imageUrl}
        alt={news.title}
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.source}>
          <img src={news.sourceIconUrl} />
          <span>{news.sourceStr}</span>
        </div>

        <h1 className={styles.title}>{news.title}</h1>

        <div className={styles.footer}>
          <div className={styles.meta}>
            <Clock3 size={16} />
            {new Date(news.gmtTime).toLocaleString()}
          </div>

          <div className={styles.cta}>
            Ler mais
            <ExternalLink size={18} />
          </div>
        </div>
      </div>
    </a>
  );
}