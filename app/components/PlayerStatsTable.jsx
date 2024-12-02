"use client";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { paginate } from "../../util/paginate";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import styles from "./PlayerStatsTable.module.css";
import ChosenPlayer from "./ChosenPlayer";
import {
  IconSquareCheckFilled,
  IconSquare,
  IconCaretUpDownFilled,
  IconCaretDownFilled,
  IconCaretUpFilled,
} from "@tabler/icons-react";

const PlayerStatsTable = ({ players }) => {
  //States================================================================================================

  //sort
  const [currentPage, setCurrentPage] = useState(1); //default 1
  const [query, setQuery] = useState(""); //Search Feature
  const [pageSize, setPageSize] = useState(20); //set able 5, 10, 30
  const [sortColumn_path, setSortColumn_path] = useState("stats.hours");
  const [sortColumn_order, setSortColumn_order] = useState("desc");
  const [chosenPlayer, setChosenPlayer] = useState("");

  //Toggle Groups
  const [professionSkills, setProfessionSkills] = useState(true); //default true
  const [passiveSkills, setPassiveSkills] = useState(false);
  const [agilitySkills, setAgilitySkills] = useState(false);
  const [combatSkills, setCombatSkills] = useState(true);
  const [craftingSkills, setCraftingSkills] = useState(false);
  const [firearmSkills, setFirearmSkills] = useState(false);
  const [survivalistSkills, setSurvivalistSkills] = useState(false);

  //Toggle Professions
  const [unemployed, setUnemployed] = useState(true); //default true
  const [fireofficer, setFireofficer] = useState(true); //default true
  const [policeofficer, setPoliceofficer] = useState(true); //default true
  const [parkranger, setParkranger] = useState(true); //default true
  const [constructionworker, setConstructionworker] = useState(true); //default true
  const [securityguard, setSecurityguard] = useState(true); //default true
  const [carpenter, setCarpenter] = useState(true); // and so on
  const [burglar, setBurglar] = useState(true);
  const [chef, setChef] = useState(true);
  const [repairman, setRepairman] = useState(true);
  const [farmer, setFarmer] = useState(true);
  const [fisherman, setFisherman] = useState(true);
  const [doctor, setDoctor] = useState(true);
  const [veteran, setVeteran] = useState(true);
  const [nurse, setNurse] = useState(true);
  const [lumberjack, setLumberjack] = useState(true);
  const [fitnessinstructor, setFitnessinstructor] = useState(true);
  const [burgerflipper, setBurgerflipper] = useState(true);
  const [electrician, setElectrician] = useState(true);
  const [engineer, setEngineer] = useState(true);
  const [metalworker, setMetalworker] = useState(true);
  const [mechanic, setMechanic] = useState(true);

  //Toggle Passive Skills
  const [strengthSkill, setStrengthSkill] = useState(false);
  const [fitnessSkill, setFitnessSkill] = useState(false);
  //Toggle Agility Skills
  const [sprintingSkill, setSprintingSkill] = useState(false);
  const [lightfootSkill, setLightfootSkill] = useState(false);
  const [nimbleSkill, setNimbleSkill] = useState(false);
  const [sneakSkill, setSneakSkill] = useState(false);
  //Toggle Combat Skills
  const [axeSkill, setAxeSkill] = useState(true);
  const [bluntSkill, setBluntSkill] = useState(true);
  const [smallBluntSkill, setSmallBluntSkill] = useState(true);
  const [longBladeSkill, setLongBladeSkill] = useState(true);
  const [smallBladeSkill, setSmallBladeSkill] = useState(true);
  const [spearSkill, setSpearSkill] = useState(true);
  const [maintenanceSkill, setMaintenanceSkill] = useState(true);
  //Toggle Crafting Skills
  const [woodworkSkill, setWoodworkSkill] = useState(false);
  const [cookingSkill, setCookingSkill] = useState(false);
  const [farmingSkill, setFarmingSkill] = useState(false);
  const [doctorSkill, setDoctorSkill] = useState(false);
  const [electricitySkill, setElectricitySkill] = useState(false);
  const [metalWeldingSkill, setMetalWeldingSkill] = useState(false);
  const [mechanicsSkill, setMechanicsSkill] = useState(false);
  const [tailoringSkill, setTailoringSkill] = useState(false);
  //Toggle Firearm Skills
  const [aimingSkill, setAimingSkill] = useState(false);
  const [reloadingSkill, setReloadingSkill] = useState(false);
  //Toggle Survivalist Skills
  const [fishingSkill, setFishingSkill] = useState(false);
  const [trappingSkill, setTrappingSkill] = useState(false);
  const [plantScavengingSkill, setPlantScavengingSkill] = useState(false);
  //Toggle Driving Skill
  const [drivingSkill, setDrivingSkill] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setPageSize(3);
      } else {
        setPageSize(19);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Toggle Functions================================================================================================

  const professionToggle = (turn) => {
    if (turn === "on") {
      setProfessionSkills(true);
      setUnemployed(true);
      setFireofficer(true);
      setPoliceofficer(true);
      setParkranger(true);
      setConstructionworker(true);
      setSecurityguard(true);
      setCarpenter(true);
      setBurglar(true);
      setChef(true);
      setRepairman(true);
      setFarmer(true);
      setFisherman(true);
      setDoctor(true);
      setVeteran(true);
      setNurse(true);
      setLumberjack(true);
      setFitnessinstructor(true);
      setBurgerflipper(true);
      setElectrician(true);
      setEngineer(true);
      setMetalworker(true);
      setMechanic(true);
    } else if (turn === "off") {
      setProfessionSkills(false);
      setUnemployed(false);
      setFireofficer(false);
      setPoliceofficer(false);
      setParkranger(false);
      setConstructionworker(false);
      setSecurityguard(false);
      setCarpenter(false);
      setBurglar(false);
      setChef(false);
      setRepairman(false);
      setFarmer(false);
      setFisherman(false);
      setDoctor(false);
      setVeteran(false);
      setNurse(false);
      setLumberjack(false);
      setFitnessinstructor(false);
      setBurgerflipper(false);
      setElectrician(false);
      setEngineer(false);
      setMetalworker(false);
      setMechanic(false);
    }
  };
  const passiveToggle = (turn) => {
    if (turn === "on") {
      setPassiveSkills(true);
      setFitnessSkill(true);
      setStrengthSkill(true);
    } else if (turn === "off") {
      setPassiveSkills(false);
      setFitnessSkill(false);
      setStrengthSkill(false);
    }
  };
  const agilityToggle = (turn) => {
    if (turn === "on") {
      setAgilitySkills(true);
      setSprintingSkill(true);
      setLightfootSkill(true);
      setNimbleSkill(true);
      setSneakSkill(true);
    } else if (turn === "off") {
      setAgilitySkills(false);
      setSprintingSkill(false);
      setLightfootSkill(false);
      setNimbleSkill(false);
      setSneakSkill(false);
    }
  };
  const combatToggle = (turn) => {
    if (turn === "on") {
      setCombatSkills(true);
      setAxeSkill(true);
      setBluntSkill(true);
      setSmallBluntSkill(true);
      setLongBladeSkill(true);
      setSmallBladeSkill(true);
      setSpearSkill(true);
      setMaintenanceSkill(true);
    } else if (turn === "off") {
      setCombatSkills(false);
      setAxeSkill(false);
      setBluntSkill(false);
      setSmallBluntSkill(false);
      setLongBladeSkill(false);
      setSmallBladeSkill(false);
      setSpearSkill(false);
      setMaintenanceSkill(false);
    }
  };
  const craftingToggle = (turn) => {
    if (turn === "on") {
      setCraftingSkills(true);
      setWoodworkSkill(true);
      setCookingSkill(true);
      setFarmingSkill(true);
      setDoctorSkill(true);
      setElectricitySkill(true);
      setMetalWeldingSkill(true);
      setMechanicsSkill(true);
      setTailoringSkill(true);
    } else if (turn === "off") {
      setCraftingSkills(false);
      setWoodworkSkill(false);
      setCookingSkill(false);
      setFarmingSkill(false);
      setDoctorSkill(false);
      setElectricitySkill(false);
      setMetalWeldingSkill(false);
      setMechanicsSkill(false);
      setTailoringSkill(false);
    }
  };
  const firearmToggle = (turn) => {
    if (turn === "on") {
      setFirearmSkills(true);
      setAimingSkill(true);
      setReloadingSkill(true);
    } else if (turn === "off") {
      setFirearmSkills(false);
      setAimingSkill(false);
      setReloadingSkill(false);
    }
  };
  const survivalistToggle = (turn) => {
    if (turn === "on") {
      setSurvivalistSkills(true);
      setFishingSkill(true);
      setPlantScavengingSkill(true);
      setTrappingSkill(true);
    } else if (turn === "off") {
      setSurvivalistSkills(false);
      setFishingSkill(false);
      setPlantScavengingSkill(false);
      setTrappingSkill(false);
    }
  };
  const individualSkillToggle = (state, setState) => {
    state ? setState(false) : setState(true);
  };

  //sort Functions================================================================================================

  const columns = [
    //basic stats
    { path: "name", label: "Name" },
    { path: "stats.hours", label: "Hours" },
    { path: "stats.kills", label: "Kills" },
    { path: "stats.profession", label: "Profession" },
    //passive stats
    { path: "perks.Strength", label: "Strength" },
    { path: "perks.Fitness", label: "Fitness" },
    //agility stats
    { path: "perks.Sprinting", label: "Sprinting" },
    { path: "perks.Lightfoot", label: "Lightfooted" },
    { path: "perks.Nimble", label: "Nimble" },
    { path: "perks.Sneak", label: "Sneak" },
    //combat stats
    { path: "perks.Axe", label: "Axe" },
    { path: "perks.Blunt", label: "Long Blunt" },
    { path: "perks.SmallBlunt", label: "Short Blunt" },
    { path: "perks.LongBlade", label: "Long Blade" },
    { path: "perks.SmallBlade", label: "Short Blade" },
    { path: "perks.Spear", label: "Spear" },
    { path: "perks.Maintenance", label: "Maintenance" },
    //crafting stats
    { path: "perks.Woodwork", label: "Carpentry" },
    { path: "perks.Cooking", label: "Cooking" },
    { path: "perks.Farming", label: "Farming" },
    { path: "perks.Doctor", label: "First Aid" },
    { path: "perks.Electricity", label: "Electrical" },
    { path: "perks.MetalWelding", label: "Metalworking" },
    { path: "perks.Mechanics", label: "Mechanics" },
    { path: "perks.Tailoring", label: "Tailoring" },
    //firearm stats
    { path: "perks.Aiming", label: "Aiming" },
    { path: "perks.Reloading", label: "Reloading" },
    //survivalist stats
    { path: "perks.Fishing", label: "Fishing" },
    { path: "perks.Trapping", label: "Trapping" },
    { path: "perks.PlantScavenging", label: "Foraging" },
    //driving stat
    { path: "perks.Driving", label: "Driving" },
  ];

  const searched = players.filter((data) => {
    if (query === "") {
      return data;
    } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }
  });
  const sorted = _.orderBy(searched, [sortColumn_path], [sortColumn_order]);
  const paginated = paginate(sorted, currentPage, pageSize);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (path) => {
    if (path === sortColumn_path) {
      setSortColumn_order(sortColumn_order === "desc" ? "asc" : "desc");
      setCurrentPage(1);
    } else {
      setSortColumn_path(path);
      setSortColumn_order("desc");
      renderSortIcon(path);
      setCurrentPage(1);
    }
  };

  const renderSortIcon = (column) => {
    if (column === sortColumn_path && sortColumn_order === "desc") {
      return <div>up</div>;
    } else if (column === sortColumn_path && sortColumn_order === "asc") {
      return <div>down</div>;
    } else {
      return <div>neither</div>;
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < paginated.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //styling Functions================================================================================================

  const thStyler = (path) => {
    if (sortColumn_path === path) {
      return styles.thStyleCurrent;
    } else {
      return styles.thStyle;
    }
  };

  //other Functions================================================================================================
  return (
    <>
      <SearchBar
        type="text"
        placeholder="Search Player"
        setChosenPlayer={setChosenPlayer}
        onSearchChange={handleSearchChange}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setQuery={setQuery}
        query={query}
      />
      {typeof window !== "undefined" && window.innerWidth > 600 && (
        <div className={styles.filterContainer}>
          <div
            className={styles.filterBtn}
            onClick={() =>
              professionSkills
                ? professionToggle("off")
                : professionToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {professionSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>Profession</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              passiveSkills ? passiveToggle("off") : passiveToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {passiveSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>passive</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              agilitySkills ? agilityToggle("off") : agilityToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {agilitySkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>agility</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              combatSkills ? combatToggle("off") : combatToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {combatSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>combat</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              craftingSkills ? craftingToggle("off") : craftingToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {craftingSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>crafting</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              firearmSkills ? firearmToggle("off") : firearmToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {firearmSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>firearm</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              survivalistSkills
                ? survivalistToggle("off")
                : survivalistToggle("on")
            }
          >
            <div className={styles.btnIcon}>
              {survivalistSkills ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>survivalist</div>
          </div>
          <div
            className={styles.filterBtn}
            onClick={() =>
              drivingSkill ? setDrivingSkill(false) : setDrivingSkill(true)
            }
          >
            <div className={styles.btnIcon}>
              {drivingSkill ? (
                <IconSquareCheckFilled width={20} />
              ) : (
                <IconSquare width={20} />
              )}
            </div>
            <div>driving</div>
          </div>
        </div>
      )}
      <div className={styles.playerAndTableContainer}>
        <ChosenPlayer player={chosenPlayer} />
        <div className={styles.tableContainer}>
          <table id="playerTable">
            <thead>
              <tr>
                <th
                  className={`${thStyler("name")} sticky-col`}
                  onClick={() => handleSort(columns[0].path)}
                >
                  <div className={styles.headContainer}>
                    <div>Name</div>
                    <div className={styles.icon}>
                      {sortColumn_path === "name" ? (
                        <>
                          {sortColumn_order === "desc" ? (
                            <IconCaretDownFilled width={15} />
                          ) : (
                            <IconCaretUpFilled width={15} />
                          )}
                        </>
                      ) : (
                        <IconCaretUpDownFilled width={15} />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className={thStyler("stats.hours")}
                  onClick={() => handleSort(columns[1].path)}
                >
                  <div className={styles.headContainer}>
                    <div>Hours</div>
                    <div className={styles.icon}>
                      {sortColumn_path === "stats.hours" ? (
                        <>
                          {sortColumn_order === "desc" ? (
                            <IconCaretDownFilled width={15} />
                          ) : (
                            <IconCaretUpFilled width={15} />
                          )}
                        </>
                      ) : (
                        <IconCaretUpDownFilled width={15} />
                      )}
                    </div>
                  </div>
                </th>
                <th
                  className={thStyler("stats.kills")}
                  onClick={() => handleSort(columns[2].path)}
                >
                  <div className={styles.headContainer}>
                    <div>Kills</div>
                    <div className={styles.icon}>
                      {sortColumn_path === "stats.kills" ? (
                        <>
                          {sortColumn_order === "desc" ? (
                            <IconCaretDownFilled width={15} />
                          ) : (
                            <IconCaretUpFilled width={15} />
                          )}
                        </>
                      ) : (
                        <IconCaretUpDownFilled width={15} />
                      )}
                    </div>
                  </div>
                </th>
                {professionSkills ? (
                  <th
                    className={thStyler("stats.profession")}
                    onClick={() => handleSort(columns[3].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Profession</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "stats.profession" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {fitnessSkill ? (
                  <th
                    className={thStyler("perks.Fitness")}
                    onClick={() => handleSort(columns[5].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Fitness</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "stats.Fitness" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {strengthSkill ? (
                  <th
                    className={thStyler("perks.Strength")}
                    onClick={() => handleSort(columns[4].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Strength</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "stats.Strength" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {sprintingSkill ? (
                  <th
                    className={thStyler("perks.Sprinting")}
                    onClick={() => handleSort(columns[6].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Sprinting</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Sprinting" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {lightfootSkill ? (
                  <th
                    className={thStyler("perks.Lightfoot")}
                    onClick={() => handleSort(columns[7].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Lightfoot</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Lightfoot" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {nimbleSkill ? (
                  <th
                    className={thStyler("perks.Nimble")}
                    onClick={() => handleSort(columns[8].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Nimble</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Nimble" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {sneakSkill ? (
                  <th
                    className={thStyler("perks.Sneak")}
                    onClick={() => handleSort(columns[9].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Sneaking</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Sneak" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {axeSkill ? (
                  <th
                    className={thStyler("perks.Axe")}
                    onClick={() => handleSort(columns[10].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Axe</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Axe" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {bluntSkill ? (
                  <th
                    className={thStyler("perks.Blunt")}
                    onClick={() => handleSort(columns[11].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>LongBlunt</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Blunt" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {smallBluntSkill ? (
                  <th
                    className={thStyler("perks.smallBlunt")}
                    onClick={() => handleSort(columns[12].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>ShortBlunt</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.smallBlunt" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {longBladeSkill ? (
                  <th
                    className={thStyler("perks.LongBlade")}
                    onClick={() => handleSort(columns[13].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>LongBlade</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.LongBlade" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {smallBladeSkill ? (
                  <th
                    className={thStyler("perks.SmallBlade")}
                    onClick={() => handleSort(columns[14].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>ShortBlade</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.SmallBlade" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {spearSkill ? (
                  <th
                    className={thStyler("perks.Spear")}
                    onClick={() => handleSort(columns[15].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Spear</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Spear" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {maintenanceSkill ? (
                  <th
                    className={thStyler("perks.Maintenance")}
                    onClick={() => handleSort(columns[16].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Maintenance</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Maintenance" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {woodworkSkill ? (
                  <th
                    className={thStyler("perks.Woodwork")}
                    onClick={() => handleSort(columns[17].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Carpentry</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Woodwork" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {cookingSkill ? (
                  <th
                    className={thStyler("perks.Cooking")}
                    onClick={() => handleSort(columns[18].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Cooking</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Cooking" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {farmingSkill ? (
                  <th
                    className={thStyler("perks.Farming")}
                    onClick={() => handleSort(columns[19].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Farming</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Farming" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {doctorSkill ? (
                  <th
                    className={thStyler("perks.Doctor")}
                    onClick={() => handleSort(columns[20].path)}
                  >
                    FirstAid
                  </th>
                ) : (
                  ""
                )}
                {electricitySkill ? (
                  <th
                    className={thStyler("perks.Electricity")}
                    onClick={() => handleSort(columns[21].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Electrical</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Electricity" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {metalWeldingSkill ? (
                  <th
                    className={thStyler("perks.MetalWleding")}
                    onClick={() => handleSort(columns[22].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Metalworking</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.MetalWleding" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {mechanicsSkill ? (
                  <th
                    className={thStyler("perks.Mechanics")}
                    onClick={() => handleSort(columns[23].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Mechanics</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Mechanics" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {tailoringSkill ? (
                  <th
                    className={thStyler("perks.Tailoring")}
                    onClick={() => handleSort(columns[24].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Tailoring</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Tailoring" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {aimingSkill ? (
                  <th
                    className={thStyler("perks.Aiming")}
                    onClick={() => handleSort(columns[25].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Aiming</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Aiming" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {reloadingSkill ? (
                  <th
                    className={thStyler("perks.Reloading")}
                    onClick={() => handleSort(columns[26].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Reloading</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Reloading" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {fishingSkill ? (
                  <th
                    className={thStyler("perks.Fishing")}
                    onClick={() => handleSort(columns[27].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Fishing</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Fishing" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {trappingSkill ? (
                  <th
                    className={thStyler("perks.Trapping")}
                    onClick={() => handleSort(columns[28].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Trapping</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Trapping" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
                {plantScavengingSkill ? (
                  <th
                    className={thStyler("perks.PlantScavenging")}
                    onClick={() => handleSort(columns[29].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Foraging</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.PlantScavenging" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}

                {drivingSkill ? (
                  <th
                    className={thStyler("perks.Driving")}
                    onClick={() => handleSort(columns[30].path)}
                  >
                    <div className={styles.headContainer}>
                      <div>Driving</div>
                      <div className={styles.icon}>
                        {sortColumn_path === "perks.Driving" ? (
                          <>
                            {sortColumn_order === "desc" ? (
                              <IconCaretDownFilled width={15} />
                            ) : (
                              <IconCaretUpFilled width={15} />
                            )}
                          </>
                        ) : (
                          <IconCaretUpDownFilled width={15} />
                        )}
                      </div>
                    </div>
                  </th>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {paginated.map((player, index) => (
                <tr
                  key={index}
                  className={
                    chosenPlayer === player.steamId ? styles.chosenPlayer : ""
                  }
                  onClick={() => setChosenPlayer(player)}
                >
                  <td
                    className={`sticky-col ${
                      index % 2 === 0 ? "evenRow" : "oddRow"
                    }`}
                  >
                    {player.name}
                  </td>
                  <td>{Math.ceil(player.stats.hours)}</td>
                  <td>{player.stats.kills}</td>
                  {professionSkills ? <td>{player.stats.profession}</td> : ""}

                  {fitnessSkill ? <td>{player.perks.Fitness}</td> : ""}
                  {strengthSkill ? <td>{player.perks.Strength}</td> : ""}

                  {sprintingSkill ? <td>{player.perks.Sprinting}</td> : ""}
                  {lightfootSkill ? <td>{player.perks.Lightfoot}</td> : ""}
                  {nimbleSkill ? <td>{player.perks.Nimble}</td> : ""}
                  {sneakSkill ? <td>{player.perks.Sneak}</td> : ""}

                  {axeSkill ? <td>{player.perks.Axe}</td> : ""}
                  {bluntSkill ? <td>{player.perks.Blunt}</td> : ""}
                  {smallBluntSkill ? <td>{player.perks.SmallBlunt}</td> : ""}
                  {longBladeSkill ? <td>{player.perks.LongBlade}</td> : ""}
                  {smallBladeSkill ? <td>{player.perks.SmallBlade}</td> : ""}
                  {spearSkill ? <td>{player.perks.Spear}</td> : ""}
                  {maintenanceSkill ? <td>{player.perks.Maintenance}</td> : ""}

                  {woodworkSkill ? <td>{player.perks.Woodwork}</td> : ""}
                  {cookingSkill ? <td>{player.perks.Cooking}</td> : ""}
                  {farmingSkill ? <td>{player.perks.Farming}</td> : ""}
                  {doctorSkill ? <td>{player.perks.Doctor}</td> : ""}
                  {electricitySkill ? <td>{player.perks.Electricity}</td> : ""}
                  {metalWeldingSkill ? (
                    <td>{player.perks.MetalWelding}</td>
                  ) : (
                    ""
                  )}
                  {mechanicsSkill ? <td>{player.perks.Mechanics}</td> : ""}
                  {tailoringSkill ? <td>{player.perks.Tailoring}</td> : ""}

                  {aimingSkill ? <td>{player.perks.Aiming}</td> : ""}
                  {reloadingSkill ? <td>{player.perks.Reloading}</td> : ""}

                  {fishingSkill ? <td>{player.perks.Fishing}</td> : ""}
                  {trappingSkill ? <td>{player.perks.Trapping}</td> : ""}
                  {plantScavengingSkill ? (
                    <td>{player.perks.PlantScavenging}</td>
                  ) : (
                    ""
                  )}

                  {drivingSkill ? <td>{player.perks.Driving}</td> : ""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {searched.length > 0 ? (
        <div className={styles.pagination}>
          {window.innerWidth > 600 && (
            <Pagination
              totalNumOfClient={searched.length}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PlayerStatsTable;
