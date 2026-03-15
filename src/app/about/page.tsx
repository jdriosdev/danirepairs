import styles from "../page.module.css";
import CallToActions from "@/components/callToActions";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Logo />
        <div className={styles.intro}>
          <h1>About.</h1>
          <p>
            Hi, I'm Daniel, a local handyman based in Sydney. I help homeowners
            with reliable home repairs, installations, and maintenance
          </p>
        </div>
        <CallToActions />
      </main>
    </div>
  );
}
