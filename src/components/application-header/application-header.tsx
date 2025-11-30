import { FolderTree, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/use-theme";
import styles from "./application-header.module.css";

export const ApplicationHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logoContainer}>
          <FolderTree className={styles.logo} size={24} />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Dir Maker</h1>
          <p className={styles.subtitle}>Visual Directory Generator</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.iconButton}
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a
          href="https://github.com/kondo0602/dir-maker"
          className={styles.iconButton}
          target="_blank"
          rel="noopener noreferrer"
          title="View on GitHub"
        >
          <Github size={20} />
        </a>
      </div>
    </header>
  );
};
