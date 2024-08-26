import { Button } from '../Button/Button';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import styles from './hero.module.scss';
import cn from 'classnames';
import Link from 'next/link';

interface Props {
  title: string;
  linkTo: string;
}

export default function Breadcrumbs({ title, linkTo }: Props) {
  return (
    <div>
        <span><Link href={linkTo}>{ title }</Link></span>
    </div>
  );
}
