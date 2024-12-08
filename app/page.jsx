import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import BattleMetricsBanner from "./components/BattlemetricsBanner";
import OnlinePlayers from "./components/OnlinePlayers";
import Navbar from "./components/Navbar";

import { Caveat } from "next/font/google";
import "./globals.css";
import Gallery from "./components/Gallery";

const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      {/* header */}
      <div className={styles.navBarContainer}>
        <Navbar />
      </div>
      <div className={styles.backgroundPicContainer}>
        <img
          className={styles.backgroundPic}
          src={"/tenyearslater.png"}
          alt="campcrewLogo"
        />
        <div className={styles.title}>
          {/* <div className={caveat.className}>
            Ten Years Later in Lost Province
          </div> */}
          {/* <div className={caveat.className}> */}
          <div className={styles.titleText2}>
            Project Zomboid Gaming Community
          </div>
          <div className={styles.titleText1}>Camp Crew PZ</div>
          {/* </div> */}
          {/* <img
            className={styles.titleImage}
            src={"/sprinterZones.png"}
            // width={600}
            // height={402}
            alt="sprinterZones"
          /> */}
          <div className={styles.titleText2}>Hosted since 06.2023</div>
        </div>
      </div>
      <div>
        <div
          style={{
            margin: "60px 0 20px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Available Servers 24/7
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "200px",
              textAlign: "center",
              border: "1px solid white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <a
              href="https://www.battlemetrics.com/servers/zomboid/30723200"
              target="_blank"
            >
              <div>Vanilla Server</div>
            </a>
          </div>
          <div
            style={{
              width: "200px",
              textAlign: "center",
              border: "1px solid white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <a
              href="https://www.battlemetrics.com/servers/zomboid/30539162"
              target="_blank"
            >
              <div>Modded Server</div>
            </a>
          </div>
          <div
            style={{
              width: "200px",
              textAlign: "center",
              border: "1px solid white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <a href="https://discord.com/invite/UAxdrPNdbj" target="_blank">
              <div>Event Server</div>
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Noob and Veterans friendly</p>
          <p>New Players are always welcomed! ^^</p>
          <p>Happy Surviving~~</p>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <a
            href="https://www.battlemetrics.com/servers/zomboid/30539162"
            target="_blank"
          >
            <BattleMetricsBanner />
          </a>
        </div>
        <br />
        <h1>Vanilla Server Information</h1>
        <p>PVE || 8 EXP || Fast Read || No Mods</p>
        <p>
          Safehouse || Daily Loot Respawn || Fast Read || Starter Kit || All Map
          Known || Shorter Night but Dark || Meatier zombie health || Zombie
          Infection through Bite Only ||
        </p>
        <p>
          High Car Spawn, Low Damage Upon Crash, but lower initial condition
        </p>
        <p>Noob and Veterans friendly</p>
        <p>New Players welcome!</p>

        <h1>Modded Server Information</h1>
        <p>PVE || 1.5 EXP || Fast Read || Vanilla Map</p>
        <p>
          Safehouse & Vehicle Claim (5) || Cure Vaccine But No Journal ||
          Shorter Night but Dark || Meatier zombie health
        </p>
        <p>
          upgradable Vanilla & KI5 vehicles || QoL mods || [VFE]Vanilla Firearms
          Expansion || Trajectory Aim
        </p>
        <p>Noob and Veterans friendly</p>
        <p>New Players welcome!</p>

        {/* <br />
        <h1>Sandbox Preview</h1>
        <p>Loot respawn every 2-3 irl (in real life) days</p>
        <p>Dynamic Difficulty, sprinter in red zones</p>
        <p>infection transmit through bite only</p>
        <p>Rare Vaccine Cures from Zombies</p>
        <p>Recoverable Skill Journal (crafting, survival skills only)</p>
        <p>Safehouse & Vehicle Claiming</p> */}

        <br />
        <div className={styles.buttonsOfLinks}>
          {/* <div className={styles.joinButtonContainer}>
            <Link href={"/economy"}>
              <div className={styles.joinButton}>
                <div className={styles.btnTitle}>Server Economy</div>
                <Image
                  src={"/logo/campcrew.png"}
                  width={30}
                  height={30}
                  alt="campcrewLogo"
                />
              </div>
            </Link>
          </div> */}
          {/* <div className={styles.joinButtonContainer}>
            <Link href={"/playerstats"}>
              <div className={styles.joinButton}>
                <div className={styles.btnTitle}>Player Stats</div>
                <Image
                  src={"/logo/campcrew.png"}
                  width={30}
                  height={30}
                  alt="campcrewLogo"
                />
              </div>
            </Link>
          </div> */}
          {/* <div className={styles.joinButtonContainer}>
            <Link href={"/mapactivity"}>
              <div className={styles.joinButton}>
                <div className={styles.btnTitle}>Map Activity</div>
                <Image
                  src={"/logo/campcrew.png"}
                  width={30}
                  height={30}
                  alt="campcrewLogo"
                />
              </div>
            </Link>
          </div> */}
        </div>

        {/* <iframe
          src="https://discord.com/widget?id=1114782403664302121&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe> */}
        {/* <OnlinePlayers /> */}
        <div className={styles.buttonsOfLinks}>
          <div className={styles.joinButtonContainer}>
            <a
              href="https://discord.gg/UAxdrPNdbj"
              className={styles.joinButton}
              target="_blank"
            >
              <div className={styles.btnTitle}>Join Discord</div>
              <Image
                src={"/logo/discord.svg"}
                width={30}
                height={30}
                alt="discordLogo"
              />
            </a>
          </div>
          <div className={styles.joinButtonContainer}>
            <a
              href="https://ko-fi.com/campcrewpz"
              className={styles.joinButton}
              target="_blank"
            >
              <div className={styles.btnTitle}>Support Us</div>
              <Image
                src={"/logo/kofi.png"}
                width={30}
                height={30}
                alt="kofiLogo"
              />
            </a>
          </div>
        </div>
        <br />
        <h1>Gallery</h1>
        <Gallery />
        <br />
      </div>
    </div>
  );
}
