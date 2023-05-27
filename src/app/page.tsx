import Image from 'next/image';
import styles from './page.module.css';

import { Button } from './components/Button/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        primary={true}
        label="Subscribe"
        link
        nav={true}
        href="https://www.google.com/"
      ></Button>
    </main>
  );
}
