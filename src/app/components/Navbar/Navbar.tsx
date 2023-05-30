import { Button } from '../Button/Button';
import BlockContainer from '@/app/layouts/BlockContainer/BlockContainer';
import styles from './navbar.module.scss';
import cn from 'classnames';

interface Props {

}

export default function Navbar({}:Props) {
  return (
    <nav className={styles.Navbar}>
      <BlockContainer flex>
          <span className={styles.icon}>Icon</span>
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
