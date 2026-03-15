import Image from "next/image";
import styles from "../app/page.module.css";
import { services, ServiceType } from "../app/services/data";

export default function ServicesList() {
  return (
    <ul className={styles.serviceListConatiner}>
      {services.map((item: ServiceType) => (
        <li key={item.id} className={styles.serviceItemCard}>
          <Image src={item.image} width={320} height={400} alt={item.seoText} />
          <div className={styles.serviceItemCardInfo}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
