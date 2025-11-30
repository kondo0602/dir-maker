import { ApplicationHeader } from "./components/application-header/application-header";
import { FormattedTextDisplayArea } from "./components/formatted-text-display-area/formatted-text-display-area";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.body}>
      <ApplicationHeader />
      <main className={styles.main}>
        <FormattedTextDisplayArea />
      </main>
    </div>
  );
};
