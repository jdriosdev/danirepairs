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
