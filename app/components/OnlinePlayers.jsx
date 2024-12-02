import PlayerBalanceTable from "./PlayerBalanceTable";
import { ip, port } from "@/util/ftp";

const OnlinePlayers = async () => {
  const id = process.env.NEXT_PUBLIC_FTP_ID;
  const pw = process.env.NEXT_PUBLIC_FTP_PASSWORD;
  //fetching from FTP of exact file
  const timestamp = Date.now();
  const url = `http://${ip}:${port}/fs/server-data/Lua/PlayerConnectionMessage.jsonl?timestamp=${timestamp}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${pw}`).toString("base64"),
    },
  });
  const ftpData = await response.text();

  //Create a long text file string into array of strings
  function convertStringToArray(inputString) {
    const lines = inputString.split("\n").filter((line) => line.trim() !== "");
    return lines;
  }
  const logArray = convertStringToArray(ftpData);

  return (
    <>
      <h1>Current Player Balances</h1>
      <div>Total Players:</div>
      {/* {logArray.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </>
  );
};

export default OnlinePlayers;
