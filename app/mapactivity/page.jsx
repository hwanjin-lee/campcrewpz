import React from "react";
import ActivityHeatMap from "../components/ActivityHeatMap";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
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
      <h1>
        Recent Player Activity Heat Map. All coordinates reset upon server
        reboot.
      </h1>
      <ActivityHeatMap />
    </div>
  );
};

export default page;
