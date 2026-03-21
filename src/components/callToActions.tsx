import Image from "next/image";
import styles from "../app/page.module.css";

export default function CallToActions({
  serviceName,
}: {
  serviceName?: string | null;
}) {
  return (
    <div className={styles.ctas}>
      <a
        className={styles.primary}
        href="tel:+61420607905"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logoInvert}
          src="/call.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
        Call now
      </a>
      <a
        className={styles.secondary}
        href={
          serviceName
            ? `https://wa.me/+61420607905?text=Hi Daniel, I need a hand with ${serviceName} in...`
            : "https://wa.me/+61420607905?text=Hi Daniel, I need a hand with a new project in..."
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logoWp}
          src="/whatsapp.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
        Message us
      </a>
    </div>
  );
}
