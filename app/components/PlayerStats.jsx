import React from "react";
import * as cheerio from "cheerio";
import PlayerStatsTable from "./PlayerStatsTable";
import { ip, port } from "@/util/ftp";
const { JSDOM } = require("jsdom");
const dotenv = require("dotenv");
dotenv.config();

const PlayerStats = async () => {
  //========================================================================================
  const timestamp = Date.now();
  const id = process.env.NEXT_PUBLIC_FTP_ID;
  const pw = process.env.NEXT_PUBLIC_FTP_PASSWORD;
  const htmlDirectory = await fetch(
    `http://${ip}:${port}/fs/server-data/Logs/?timestamp=${timestamp}`,
    // `http://${host}:${port}/fs/server-data/Logs/?timestamp=${timestamp}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        // Authorization: "Basic " + btoa(`${ftpID}:${ftpPW}`),
        Authorization: "Basic " + btoa(`${id}:${pw}`),
        "Cache-Control": "no-cache",
      },
    }
  );
  const response = await htmlDirectory.text();
  const htmlCode = `${response}`;
  const $ = cheerio.load(response);
  const anchorElements = $('li a[title$="player.txt"]');

  const filenames = anchorElements
    .map((index, element) => $(element).attr("title"))
    .get();
  const mostRecentFile = filenames[filenames.length - 1];

  //========================================================================================
  // const url = `http://${host}:${port}/fs/server-data/Logs/${mostRecentFile}?timestamp=${timestamp}`;
  const url = `http://${ip}:${port}/fs/server-data/Logs/${mostRecentFile}?timestamp=${timestamp}`;

  const playersTextFile = await fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        // "Basic " + Buffer.from(`${ftpID}:${ftpPW}`).toString("base64"),
        "Basic " + Buffer.from(`${id}:${pw}`).toString("base64"),
    },
  });
  const playerTextFileResponse = await playersTextFile.text();

  //========================================================================================
  function splitLogEntries(logString) {
    // Define a regular expression to match log entries with timestamps
    const logEntryRegex =
      /\[(\d{2}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d{3})\]\s(\d+)\s"([^"]+)"\s[^{]*({.*})\straits=(\[.*\])\sstats=({.*})\shealth=({.*})\ssafehouse owner=.*safehouse member=\(.*\) \((\d+),(\d+),\d+\)\./g;

    // Use the regular expression to split the string into log entries
    const logEntries = logString.match(logEntryRegex);

    return logEntries || [];
  }
  const stringArr = splitLogEntries(playerTextFileResponse);
  function parsePlayerData(input) {
    const regex =
      /\[(.*?)\] (\d+) "(.*?)" (tick|connected) perks=({.*?}) traits=(\[.*?\]) stats=({.*?})/;
    const matches = input.match(regex);

    if (!matches) {
      return null;
    }

    const [timestamp, steamId, name, type, perks, traits, stats] = matches;

    const playerObject = {
      steamId,
      name,
      type,
      perks: JSON.parse(perks),
      traits: JSON.parse(traits),
      stats: JSON.parse(stats),
    };

    return playerObject;
  }
  function parsePlayerDataArray(inputArray) {
    const parsedData = [];

    for (const input of inputArray) {
      const playerObject = parsePlayerData(input);
      //   if (playerObject) {
      //     parsedData.push(playerObject);
      //   }
      if (playerObject) {
        const existingPlayerIndex = parsedData.findIndex(
          (item) => item.steamId === playerObject.steamId
        );

        if (existingPlayerIndex !== -1) {
          // Update the existing object with the new data
          Object.assign(parsedData[existingPlayerIndex], playerObject);
        } else {
          // Add a new object to the array
          parsedData.push(playerObject);
        }
      }
    }

    return parsedData;
  }
  const parsedPlayersData = parsePlayerDataArray(stringArr || []);
  return (
    <>
      {/* div under here is for developmental purpose only. uncomment to see the file and input size. */}
      {/* <div>
        Data file: {mostRecentFile}, Total Input: {stringArr.length}
      </div> */}
      <PlayerStatsTable players={parsedPlayersData} />
    </>
  );
};

export default PlayerStats;

// ('[18-10-23 20:49:33.847] 76561198847048082 "Kang Kyle" tick perks={"Aiming":4,"Axe":4,"Blunt":1,"Cooking":7,"Doctor":3,"Driving":0,"Electricity":2,"Farming":2,"Fishing":5,"Fitness":5,"Lightfoot":3,"LongBlade":0,"Maintenance":2,"Mechanics":4,"MetalWelding":0,"Nimble":1,"PlantScavenging":3,"Reloading":5,"SmallBlade":0,"SmallBlunt":0,"Sneak":3,"Spear":0,"Sprinting":4,"Strength":6,"Tailoring":0,"Trapping":2,"Woodwork":10} traits=["Axeman","Desensitized","NightVision","SlowReader","Stout"] stats={"profession":"lumberjack","kills":1792,"hours":2294.48} health={"health":100,"infected":false} safehouse owner=(10808x9057 - 10858x9099) safehouse member=() (10826,9061,0).');

// const player = {
//   steamId: "76561198847048082",
//   name: "Kang Kyle",
//   type: "tick",
//   perks: {
//     Aiming: 4,
//     Axe: 4,
//     Blunt: 1,
//     Cooking: 7,
//     Doctor: 3,
//     Driving: 0,
//     Electricity: 2,
//     Farming: 2,
//     Fishing: 5,
//     Fitness: 5,
//     Lightfoot: 3,
//     LongBlade: 0,
//     Maintenance: 2,
//     Mechanics: 4,
//     MetalWelding: 0,
//     Nimble: 1,
//     PlantScavenging: 3,
//     Reloading: 5,
//     SmallBlade: 0,
//     SmallBlunt: 0,
//     Sneak: 3,
//     Spear: 0,
//     Sprinting: 4,
//     Strength: 6,
//     Tailoring: 0,
//     Trapping: 2,
//     Woodwork: 10,
//   },
//   traits: ["Axeman", "Desensitized", "NightVision", "SlowReader", "Stout"],
//   stats: {
//     profession: "lumberjack",
//     kills: 1792,
//     hours: 2294.48,
//   },
// };
