import { Montserrat_Alternates } from 'next/font/google';
import { Button } from '../Button/Button';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './navbar.module.scss';
import cn from 'classnames';
import { LinkButton } from '../LinkButton/LinkButton';

interface Props {}

const font = Montserrat_Alternates({ 
  variable: '--font-mont-alt',
  weight: ['300', '400', '500', '700'], 
  subsets: ['latin']
});


export default function Navbar({}: Props) {
  const classNames = cn(font.variable, styles.Navbar);
  return (
    <nav className={classNames}>
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
          <Button primary={false} small>
            <span>Recent Episodes</span>
          </Button>
          <Button primary small>
            <span>Subscribe</span>
          </Button>
        </div>
      </BlockContainer>
    </nav>
  );
}
