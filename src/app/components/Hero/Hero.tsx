import { Button } from '../Button/Button';
import BlockContainer from '../../../app/layouts/BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';

interface Props {}

export default function Navbar({}: Props) {
  return (
    <section className={styles.Hero}>
      <BlockContainer flex>
        <Button
          primary={true}
          label="Subscribe"
          link
          nav={true}
          href="https://www.google.com/"
        />
      </BlockContainer>
    </section>
  );
}
