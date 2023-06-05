import { Button } from '../Button/Button';
import BlockContainer from '../../../app/layouts/BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';

interface Props {}

export default function Navbar({}: Props) {
  const handleClick = (() => {
    console.log('click');
  });

  return (
    <section className={styles.Hero}>
      <BlockContainer flex>
        <Button
          primary={true}
          small={true}
          label="Subscribe"
        />
      </BlockContainer>
    </section>
  );
}
