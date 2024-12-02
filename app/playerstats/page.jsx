import React from "react";
import Link from "next/link";
import PlayerStats from "../components/PlayerStats";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="flex">
          <div className="backHome">
            <Image
              src={"/arrow-left.svg"}
              width={20}
              height={20}
              className="image"
              alt="arrowLeft"
            />
            <div>Back Home</div>
          </div>
        </div>
      </Link>
      <h1>Player Stats</h1>
      <PlayerStats />
    </>
  );
};

export default page;
