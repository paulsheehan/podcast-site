import { Button } from '../Button/Button';
import BlockContainer from '../../../app/layouts/BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './navbar.module.scss';
import cn from 'classnames';

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
            <a href="#">Episodes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>
        <div className={styles.ctaArea}>
          <Button primary={false} nav link label="Recent Episodes"></Button>
          <Button primary nav link label="Subscribe" href="#"></Button>
        </div>
      </BlockContainer>
    </nav>
  );
}
