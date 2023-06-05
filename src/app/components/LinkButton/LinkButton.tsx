import Link from 'next/link';
import styles from '../../styles/ButtonLink.module.scss';
import cn from 'classnames';

interface ButtonLink {
  primary?: boolean;
  small?: boolean;
  inline?: boolean;
  label?: string;
  href: string;
  children: React.ReactNode;
}


export const LinkButton = ({
  primary = true,
  small = false,
  inline,
  label,
  href,
  children,
  ...attributes
}: ButtonLink) => {
  const classNames = cn(styles.Button, {
    [styles.primary]: primary,
    [styles.secondary]: !primary,
    [styles.small]: small,
    [styles.inline]: inline,
  });

  return (
    <Link href={href} className={classNames} {...attributes}>
      {children}
    </Link>
  )
};