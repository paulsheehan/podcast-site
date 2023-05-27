import Link from 'next/link';
import styles from './Button.module.scss';
import cn from 'classnames';

interface Props {
  primary?: boolean;
  href?: string;
  link?: boolean;
  nav?: boolean;
  label: string;
}

export const Button = ({
  primary = true,
  label = 'Button',
  link = false,
  nav = false,
  href = '#',
  ...attributes
}: Props) => {
  const classNames = cn(styles.Button, {
    [styles.primary]: primary,
    [styles.secondary]: !primary,
    [styles.nav]: nav,
  });

  let buttonElement = link ? (
    <Link href={href} className={classNames} {...attributes}>
      {label}
    </Link>
  ) : (
    <button className={classNames} {...attributes}>
      {label}
    </button>
  );

  return <>{buttonElement}</>;
};
