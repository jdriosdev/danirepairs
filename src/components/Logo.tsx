import Image from "next/image";
import styles from "../app/page.module.css";

export default function Logo() {
  return (
    <Image
      className={styles.logo}
      src="/DaniRepairsLogo.svg"
      alt="Dani Repairs logo"
      width={100}
      height={150}
      priority
    />
  );
}
