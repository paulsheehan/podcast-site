import Image from 'next/image';
import styles from './page.module.css';

import { Button } from './components/Button/Button';
import Hero from './components/Hero/Hero';

const pageContent = <>
  <h1>Your Daily <span className="block red">Podcast</span></h1>
  <p>We cover all kinds of categories and
a weekly special guest.</p>
  <Button
    primary={true}
    small={true}
    label="Subscribe"
  />
</>


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero>{pageContent}</Hero>
    </main>
  );
}
