import { Button } from '../Button/Button';
import BlockContainer from '../../../app/layouts/BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './navbar.module.scss';
import cn from 'classnames';
import { LinkButton } from '../LinkButton/LinkButton';

interface Props {}

export default function Navbar({}: Props) {
  return (
    <nav className={styles.Navbar}>
      <BlockContainer flex>
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={74}
          height={74}
        ></Image>
        <ul className={styles.menuList}>
          <li>
            <LinkButton href="/episodes" inline>Episodes</LinkButton>
          </li>
          <li>
            <LinkButton href="/about" inline>About</LinkButton>
          </li>
          <li>
            <LinkButton href="/more" inline>More</LinkButton>
          </li>
        </ul>
        <div className={styles.ctaArea}>
          <Button primary={false} small label="Recent Episodes"></Button>
          <Button primary small label="Subscribe"></Button>
        </div>
      </BlockContainer>
    </nav>
  );
}
