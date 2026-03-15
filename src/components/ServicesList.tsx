import Image from "next/image";
import styles from "../app/page.module.css";
import { services, ServiceType } from "../app/services/data";
import Link from "next/link";

export default function ServicesList() {
  return (
    <>
      <h2>Explore all our services</h2>
      <ul className={styles.serviceListConatiner}>
        {services.map((item: ServiceType) => (
          <Link key={item.id} href={`services/${item.urlKey}`}>
            <li className={styles.serviceItemCard}>
              <Image
                src={item.image}
                width={320}
                height={400}
                alt={item.seoText}
              />
              <div className={styles.serviceItemCardInfo}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
