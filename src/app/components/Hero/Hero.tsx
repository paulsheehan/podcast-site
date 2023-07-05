import { Button } from '../Button/Button';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
}

export default function Hero({ children }: Props) {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <section className={styles.Hero}>
      <BlockContainer flex column>
        {children}
      </BlockContainer>
      <span className={cn(styles.bgImage, styles.left)}>
        <Image
          src="/stars-hero-left.svg"
          alt="Left background hero illustration"
          width={400}
          height={438}
        />
      </span>
      <span className={cn(styles.bgImage, styles.right)}>
        <Image
          src="/stars-hero-right.png"
          alt="Right background hero illustration"
          width={160}
          height={216}
        />
      </span>
    </section>
  );
}
