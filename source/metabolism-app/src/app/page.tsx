import Image from "next/image";
import styles from "../styles/page.module.css";
import Login from "../pages/login";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Login/>
      </main>
    </div>
  );
}
