import Image from "next/image";
import styles from "./page.module.css";
import CallToActions from "@/components/callToActions";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Logo />
        <div className={styles.intro}>
          <h1>Reliable Handyman Services in Sydney</h1>
          <p>Need a hand with your next project? let me help you</p>
        </div>
        {/* <div className={styles.ctas}>
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
        </div> */}
        <CallToActions />

        <div className={styles.intro}>
          <p>
            We offer reliable handyman services in Sydney including skirting
            board installation, door adjustments, locks and handles,
            architraves, wall patching and painting, Gyprock repairs,
            polycarbonate roofing, silicone sealing, furniture assembly, and
            more.
          </p>
        </div>
      </main>
    </div>
  );
}
