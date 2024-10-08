import { Button } from '../Button/Button';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
}

export default function Hero({ children }: Props) {
  return (
    <section className={styles.Hero}>
      <BlockContainer flex column>
        {children}
      </BlockContainer>
    </section>
  );
}
