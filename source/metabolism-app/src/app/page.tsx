import styles from "../styles/page.module.css";
import Login from "./login/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Login/>
      </main>
    </div>
  );
}
