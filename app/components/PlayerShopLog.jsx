import React from "react";
import PurchasedTable from "./PurchasedTable";
import { ip, port } from "@/util/ftp";

const PlayerShopLog = async () => {
  //fetching from FTP of exact file
  const id = process.env.NEXT_PUBLIC_FTP_ID;
  const pw = process.env.NEXT_PUBLIC_FTP_PASSWORD;
  const timestamp = Date.now();
  const url = `http://${ip}:${port}/fs/server-data/Lua/shops_transactions.log?timestamp=${timestamp}`;

  const response = await fetch(url, {
    cache: "no-store",
    method: "GET",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${pw}`).toString("base64"),
      "Cache-Control": "no-cache",
    },
  });
  const ftpData = await response.text();

  //Create a long text file string into array of strings
  function convertStringToArray(inputString) {
    const lines = inputString.split("\n").filter((line) => line.trim() !== "");
    return lines;
  }
  const logArray = convertStringToArray(ftpData);

  //========================================================================================================================

  function parsePurchaseData(purchaseArray) {
    const itemsMap = {};

    purchaseArray.forEach((purchase) => {
      const regexTimestamp = /\[(.*?)\]/;
      const timestampMatch = regexTimestamp.exec(purchase);
      const timestamp = timestampMatch ? timestampMatch[1] : null;

      const regex = /\[.*?Purchase\s+\[(.*?)\]/;
      const match = regex.exec(purchase);

      if (match && timestamp) {
        const items = match[1].split(",");
        items.forEach((item) => {
          const [itemName, itemCount] = item.split("=");
          const parsedItemCount = parseInt(itemCount, 10);

          if (itemsMap[itemName]) {
            itemsMap[itemName].amount += parsedItemCount;
            if (
              new Date(timestamp) > new Date(itemsMap[itemName].lastTransaction)
            ) {
              itemsMap[itemName].lastTransaction = new Date(
                timestamp
              ).toISOString();
            }
          } else {
            itemsMap[itemName] = {
              item: itemName,
              amount: parsedItemCount,
              lastTransaction: new Date(timestamp).toISOString(),
            };
          }
        });
      }
    });

    const result = Object.values(itemsMap);

    return result;
  }

  const PurchasedItems = parsePurchaseData(logArray);
  //========================================================================================================================

  return (
    <>
      <h1>Recent Player Shop Purchases</h1>
      <div>
        Total Transactions: {logArray.length}, Item type:{" "}
        {PurchasedItems.length}
      </div>
      <PurchasedTable PurchasedItems={PurchasedItems} />
    </>
  );
};

export default PlayerShopLog;

// [
//   {item:"Base.NailsBox", amount: 24},
//   {item:"Base.Wine", amount:3},
//   {item:"Base.SnowShovel", amount:1},
//   {item:"Base.Ketchup", amount:2},
//   {item:"Base.Wine2", amount:1},
//   {item:"Base.Spas12Folded", amount:3},
//   {item:"AuthenticZClothing.BunnyEars", amount:1},
//   {item:"Base.CleaningKit", amount:3},
//   {item:"ImprovisedSilencers.Silencer", amount:2},
//   {item:"Base.762Clip", amount:2},
//   {item:"Base.FishingRod", amount:3},
//   {item:"Base.FishingTackle2", amount:1},
//   {item:"Base.FishingTackle", amount:4},
//   {item:"Base.FishingLine", amount:3},
//   {item:"Base.FishingRod", amount:1}
// ]

// [
//   "[Sun Nov 19 07:23:34 UTC 2023] Ersatz 4970,4337,0 Purchase [Base.NailsBox=4]",
//   "[Sun Nov 19 08:17:50 UTC 2023] Firestorm3050 4953,4353,0 Purchase [Base.Wine=3]",
//   "[Sun Nov 19 08:19:03 UTC 2023] Firestorm3050 4951,4319,0 Purchase [Base.SnowShovel=1]",
//   "[Sun Nov 19 09:12:15 UTC 2023] Ersatz 4957,4337,0 Purchase [Base.Ketchup=2,Base.Wine2=1]",
//   "[Sun Nov 19 18:51:35 UTC 2023] Firestorm3050 4954,4331,0 Purchase [Base.Spas12Folded=3,AuthenticZClothing.BunnyEars=1,Base.CleaningKit=3,ImprovisedSilencers.Silencer=2,Base.762Clip=2]",
//   "[Sun Nov 19 18:52:49 UTC 2023] Firestorm3050 4970,4337,0 Purchase [Base.NailsBox=20]",
//   "[Sun Nov 19 18:56:06 UTC 2023] Firestorm3050 4979,4367,0 Purchase [Base.FishingRod=1,Base.FishingTackle2=1,Base.FishingTackle=1]",
//   "[Sun Nov 19 18:58:13 UTC 2023] Firestorm3050 4952,4319,0 Purchase [Base.FishingLine=3,Base.FishingRod=1]",
//   "[Sun Nov 19 20:09:30 UTC 2023] Ersatz 4952,4319,0 Purchase [Base.FishingTackle=3,Base.FishingRod=2]",
// ];
