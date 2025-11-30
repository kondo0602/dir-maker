import { FormattedTextDisplayArea } from "./components/formatted-text-display-area/formatted-text-display-area";
import { Header } from "./components/header/header";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Dir Maker</h1>
        <p className={styles.description}>
          Please input the plain text of your directory structure into the
          provided textarea.
          <br />
          Adding a space at the beginning of the text will convert it into a
          formatted directory structure!
        </p>
        <FormattedTextDisplayArea />
      </main>
    </div>
  );
};
