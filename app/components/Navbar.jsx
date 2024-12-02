"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <div
      className={`${styles.navbarContainer} ${color ? styles.background : ""}`}
    >
      <div>
        <Link href={"/"}>
          <div className={styles.logoContainer}>
            <Image
              src={"/logo/campcrew.png"}
              width={40}
              height={40}
              alt="campcrewLogo"
            />
            <div className={styles.link}>
              <div className={styles.logoText}>Camp Crew PZ</div>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        {/* <Link href={"/economy"}>
          <div className={styles.link}>
            <div>Server Economy</div>
          </div>
        </Link> */}
        {/* <Link href={"/playerstats"}>
          <div className={styles.link}>
            <div>Player Stats</div>
          </div>
        </Link> */}
        {/* <Link href={"/mapactivity"}>
          <div className={styles.link}>
            <div>Map Activity</div>
          </div>
        </Link> */}
        <div className={styles.link}>
          {" "}
          <a
            href="https://discord.gg/UAxdrPNdbj"
            className={styles.joinButton}
            target="_blank"
          >
            <Image
              src={"/logo/discord.svg"}
              width={30}
              height={30}
              alt="discordLogo"
            />
          </a>
        </div>
        <div className={styles.link}>
          <a
            href="https://ko-fi.com/campcrewpz"
            className={styles.joinButton}
            target="_blank"
          >
            <Image
              src={"/logo/kofi.png"}
              width={30}
              height={30}
              alt="kofiLogo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
