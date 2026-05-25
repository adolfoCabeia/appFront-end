"use client";

import { useState } from "react";
import { useNews } from "../hooks/useNews";
import NewsCard from "./NewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./NewsList.module.css";
import SkeletonCard from "@/shared/components/SkeletonCard";

export default function NewsList() {
  const { data, isLoading } = useNews();
  const [progress, setProgress] = useState(0);

 if (isLoading)
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressBar}
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={(_, __, percentage) => {
          setProgress(1 - percentage);
        }}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {data?.map((news) => (
          <SwiperSlide key={news.id}>
            <NewsCard news={news} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}