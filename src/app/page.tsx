import Image from 'next/image';
import styles from './page.module.css';

import { Button } from './components/Button/Button';
import Hero from './components/Hero/Hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Hero />
    </main>
  );
}
