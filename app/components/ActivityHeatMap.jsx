import React from "react";
import * as cheerio from "cheerio";
import Heatmap from "./HeatMap";
import Image from "next/image";
import styles from "./ActivityHeatMap.module.css";
// import HeatMap from "./HeatMap";
const { JSDOM } = require("jsdom");
const dotenv = require("dotenv");
dotenv.config();
import { ip, port } from "@/util/ftp";

const ActivityHeatMap = async () => {
  //========================================================================================
  const id = process.env.NEXT_PUBLIC_FTP_ID;
  const pw = process.env.NEXT_PUBLIC_FTP_PASSWORD;
  const timestamp = Date.now();
  const htmlDirectory = await fetch(
    `http://${ip}:${port}/fs/server-data/Logs/?timestamp=${timestamp}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${id}:${pw}`),
        "Cache-Control": "no-cache",
      },
    }
  );
  const response = await htmlDirectory.text();
  const htmlCode = `${response}`;
  const $ = cheerio.load(response);
  const anchorElements = $('li a[title$="item.txt"]');

  const filenames = anchorElements
    .map((index, element) => $(element).attr("title"))
    .get();
  const mostRecentFile = filenames[filenames.length - 1];

  //========================================================================================
  const url = `http://${ip}:${port}/fs/server-data/Logs/${mostRecentFile}?timestamp=${timestamp}`;

  const playersTextFile = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${pw}`).toString("base64"),
    },
  });
  const playerTextFileResponse = await playersTextFile.text();

  //========================================================================================
  //   function parseTxtFile(txt) {
  //     const lines = txt.split("\n");
  //     const result = [];

  //     for (const line of lines) {
  //       const match = line.match(/(\d+),(\d+),(\d+)/);

  //       if (match) {
  //         const x = parseInt(match[1]);
  //         const y = parseInt(match[2]);
  //         const z = parseInt(match[3]);

  //         result.push({ x, y, z });
  //       }
  //     }

  //     return result;
  //   }

  //   const coordinates = parseTxtFile(playerTextFileResponse);

  //   function removeDuplicates(coordinates) {
  //     const seen = new Set();
  //     return coordinates.filter((coord) => {
  //       const key = `${coord.x}_${coord.y}_${coord.z}`;
  //       if (!seen.has(key)) {
  //         seen.add(key);
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   const uniqueCoordinates = removeDuplicates(coordinates);

  //====================================================================

  // function parseAndRemoveDuplicates(txt) {
  //   const lines = txt.split("\n");
  //   const result = [];
  //   const seen = new Set();

  //   for (const line of lines) {
  //     const match = line.match(/(\d+),(\d+),(\d+)/);

  //     if (match) {
  //       const x = parseInt(match[1]);
  //       const y = parseInt(match[2]);
  //       const z = parseInt(match[3]);

  //       const key = `${x}_${y}_${z}`;
  //       if (!seen.has(key)) {
  //         seen.add(key);
  //         result.push({ x, y, z });
  //       }
  //     }
  //   }

  //   return result;
  // }

  // const activityPoints = parseAndRemoveDuplicates(playerTextFileResponse);

  //====================================================================

  function parseAndRemoveDuplicates(txt) {
    const lines = txt.split("\n");
    const result = [];
    const seen = new Set();

    for (const line of lines) {
      const match = line.match(/(\d+),(\d+),(\d+)/);

      if (match) {
        const x = Math.ceil(parseInt(match[1]) / 20);
        const y = Math.ceil(parseInt(match[2]) / 20);

        const key = `${x}_${y}`;
        if (!seen.has(key)) {
          seen.add(key);
          result.push([x, y]);
        }
      }
    }

    return result;
  }

  const activityPoints = parseAndRemoveDuplicates(playerTextFileResponse);
  //========================================================================================
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Image
          src={"/sprinterZoneEdited.png"}
          width={990}
          height={795}
          alt="map"
        />
      </div>
      <Heatmap
        coordinates={activityPoints}
        // width={2498 / 3}
        // height={2621 / 3}
        width={990}
        height={795}
      />
      <div>
        Here, you can scan to identify recently visited areas, aiding in loot
        runs and encounters with fellow players!
      </div>
      <div className={styles.red}>
        Proceed with caution in regions marked with red squares as they pose
        significant dangers, particularly when traveling solo.
      </div>
      <div className={styles.red}>
        These zones are inhabited by Sprinters, making them especially
        hazardous..
      </div>
    </div>
  );
};

export default ActivityHeatMap;
