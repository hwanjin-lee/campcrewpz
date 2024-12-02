"use client";
import { useEffect, useState } from "react";
import styles from "./BattlemetricBanner.module.css";

const BattleMetricsBanner = () => {
  const [bannerUrl, setBannerUrl] = useState("");

  const battlemetricsBannerChoice = () => {
    if (window.innerWidth > 800) {
      return "https://cdn.battlemetrics.com/b/horizontal500x80px/30539162.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700";
    } else {
      return "https://cdn.battlemetrics.com/b/standardVertical/30539162.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&maxPlayersHeight=300";
    }
  };

  useEffect(() => {
    const updateBannerUrl = () => setBannerUrl(battlemetricsBannerChoice());

    // Set initial banner URL
    updateBannerUrl();

    // Add event listener for window resize
    window.addEventListener("resize", updateBannerUrl);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateBannerUrl);
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <img src={bannerUrl} alt="BattleMetrics Banner" />
    </div>
  );
};

export default BattleMetricsBanner;
