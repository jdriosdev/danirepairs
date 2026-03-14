import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Reliable Handyman Services in Sydney</h1>
          <p>Need a hand with your next project? let me help you</p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="tel:+61420607905"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/call.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Call now
          </a>
          <a
            className={styles.secondary}
            href="https://wa.me/420607905?text=Hi Daniel, I need a hand with a new project in Sydney"
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
      </main>
    </div>
  );
}
