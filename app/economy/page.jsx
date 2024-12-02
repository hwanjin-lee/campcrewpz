import React from "react";
import Link from "next/link";
import PlayerEconomy from "../components/PlayerEconomy";
import Image from "next/image";
import PlayerShopLog from "../components/PlayerShopLog";

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
      <div className="flex">
        <div>
          <PlayerEconomy />
        </div>
        <div>
          <PlayerShopLog />
        </div>
      </div>
    </>
  );
};

export default page;
