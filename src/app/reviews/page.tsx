import styles from "../page.module.css";
import CallToActions from "@/components/callToActions";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Logo />
        <div className={styles.intro}>
          <h1>Reviews.</h1>
          <p>
            We can help with a wide range of home repairs and improvements,
            including skirting board installation, door adjustments, lock and
            handle installation, frames and architraves, wall patching and
            painting, Gyprock repairs, installation of polycarbonate roof
            sheets, silicone sealing for kitchens and bathrooms, furniture
            assembly, and much more. No job is too small — we are here to help
            keep your home in great condition.
          </p>
        </div>
        <CallToActions />
      </main>
    </div>
  );
}
