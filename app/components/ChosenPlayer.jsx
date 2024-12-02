import React from "react";
import styles from "./ChosenPlayer.module.css";
import ColoredSquares from "./ColoredSquares";
import Traits from "./Traits";
import { professionSelector } from "../../util/professionSelector";

const ChosenPlayer = ({ player }) => {
  return (
    <div className={styles.container}>
      <div className={styles.playerInfoContainer}>
        <div>
          <div className={styles.playerName}>
            {player ? player.name : "Player"}
          </div>
          <div>{player ? player.stats.profession : "Occupation"}</div>
          <div>Survived : {player ? player.stats.hours : "0"}hr</div>
          <div>Kill Count : {player ? player.stats.kills : "0"}</div>
        </div>
        <div>{player ? professionSelector(player.stats.profession) : ""}</div>
      </div>
      <Traits traits={player ? player.traits : ""} />
      <div className={styles.skillGroup}>Passive</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Fitness</div>
          <ColoredSquares
            key={player ? player.perks.Fitness : ""}
            number={player ? player.perks.Fitness : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Strength</div>
          <ColoredSquares
            key={player ? player.perks.Strength : ""}
            number={player ? player.perks.Strength : ""}
          />
        </div>
      </div>
      <div className={styles.skillGroup}>Agility</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Sprinting</div>
          <ColoredSquares
            key={player ? player.perks.Sprinting : ""}
            number={player ? player.perks.Sprinting : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Lightfooted</div>
          <ColoredSquares
            key={player ? player.perks.Lightfoot : ""}
            number={player ? player.perks.Lightfoot : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Nimble</div>
          <ColoredSquares
            key={player ? player.perks.Nimble : ""}
            number={player ? player.perks.Nimble : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Sneaking</div>
          <ColoredSquares
            key={player ? player.perks.Sneak : ""}
            number={player ? player.perks.Sneak : ""}
          />
        </div>
      </div>
      <div className={styles.skillGroup}>Combat</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Axe</div>
          <ColoredSquares
            key={player ? player.perks.Axe : ""}
            number={player ? player.perks.Axe : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Long Blunt</div>
          <ColoredSquares
            key={player ? player.perks.Blunt : ""}
            number={player ? player.perks.Blunt : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Short Blunt</div>
          <ColoredSquares
            key={player ? player.perks.SmallBlunt : ""}
            number={player ? player.perks.SmallBlunt : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Long Blade</div>
          <ColoredSquares
            key={player ? player.perks.LongBlade : ""}
            number={player ? player.perks.LongBlade : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Short Blade</div>
          <ColoredSquares
            key={player ? player.perks.SmallBlade : ""}
            number={player ? player.perks.SmallBlade : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Spear</div>
          <ColoredSquares
            key={player ? player.perks.Spear : ""}
            number={player ? player.perks.Spear : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Maintenance</div>
          <ColoredSquares
            key={player ? player.perks.Maintenance : ""}
            number={player ? player.perks.Maintenance : ""}
          />
        </div>
      </div>
      <div className={styles.skillGroup}>Crafting</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Carpentry</div>
          <ColoredSquares
            key={player ? player.perks.Woodwork : ""}
            number={player ? player.perks.Woodwork : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Cooking</div>
          <ColoredSquares
            key={player ? player.perks.Cooking : ""}
            number={player ? player.perks.Cooking : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Farming</div>
          <ColoredSquares
            key={player ? player.perks.Farming : ""}
            number={player ? player.perks.Farming : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>First Aid</div>
          <ColoredSquares
            key={player ? player.perks.Doctor : ""}
            number={player ? player.perks.Doctor : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Electrical</div>
          <ColoredSquares
            key={player ? player.perks.Electricity : ""}
            number={player ? player.perks.Electricity : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Metalworking</div>
          <ColoredSquares
            key={player ? player.perks.MetalWelding : ""}
            number={player ? player.perks.MetalWelding : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Mechanics</div>
          <ColoredSquares
            key={player ? player.perks.Mechanics : ""}
            number={player ? player.perks.Mechanics : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Tailoring</div>
          <ColoredSquares
            key={player ? player.perks.Tailoring : ""}
            number={player ? player.perks.Tailoring : ""}
          />
        </div>
      </div>
      <div className={styles.skillGroup}>Firearm</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Aiming</div>
          <ColoredSquares
            key={player ? player.perks.Aiming : ""}
            number={player ? player.perks.Aiming : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Reloading</div>
          <ColoredSquares
            key={player ? player.perks.Reloading : ""}
            number={player ? player.perks.Reloading : ""}
          />
        </div>
      </div>
      <div className={styles.skillGroup}>Survivalist</div>
      <div className={styles.skillGroupContainer}>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Fishing</div>
          <ColoredSquares
            key={player ? player.perks.Fishing : ""}
            number={player ? player.perks.Fishing : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Trapping</div>
          <ColoredSquares
            key={player ? player.perks.Trapping : ""}
            number={player ? player.perks.Trapping : ""}
          />
        </div>
        <div className={styles.skillLine}>
          <div className={styles.skill}>Foraging</div>
          <ColoredSquares
            key={player ? player.perks.PlantScavenging : ""}
            number={player ? player.perks.PlantScavenging : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ChosenPlayer;
