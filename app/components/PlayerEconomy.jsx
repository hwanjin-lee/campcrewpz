import PlayerBalanceTable from "./PlayerBalanceTable";
import { ip, port } from "@/util/ftp";

const PlayerEconomy = async () => {
  //fetching from FTP of exact file
  const id = process.env.NEXT_PUBLIC_FTP_ID;
  const pw = process.env.NEXT_PUBLIC_FTP_PASSWORD;
  const timestamp = Date.now();
  const url = `http://${ip}:${port}/fs/server-data/Lua/timestamp_economy.log?timestamp=${timestamp}`;

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

  //Create array of objects from array of strings then sort
  function parseTransactionData(data) {
    const result = {};
    for (const line of data) {
      const timestampMatch = line.match(/^\[([\w\s:]+)\]/);
      if (timestampMatch) {
        const depositMatch = line.match(
          /Deposit: (.+?) oldBalance: Coin: \d+ SpecialCoin \d+ newBalance: Coin: (\d+) SpecialCoin \d+/
        );
        if (depositMatch) {
          const name = depositMatch[1];
          const balance = parseInt(depositMatch[2], 10);
          result[name] = { name, balance };
        }
      }
    }
    return Object.values(result);
  }
  const result = parseTransactionData(logArray);
  result.sort((a, b) => b.balance - a.balance);

  return (
    <>
      <h1>Current Player Balances</h1>
      <div>Total Players: {result.length}</div>
      <PlayerBalanceTable players={result} />
      {/* <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {result.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.balance}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* {logArray.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </>
  );
};

export default PlayerEconomy;
