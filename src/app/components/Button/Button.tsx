import styles from '../../styles/ButtonLink.module.scss';
import cn from 'classnames';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  small?: boolean;
  inline?: boolean;
}

export const Button = ({
  primary = true,
  small = false,
  inline = false,
  children,
  ...attributes
}: Button) => {
  const classNames = cn(styles.Button, {
    [styles.primary]: primary,
    [styles.secondary]: !primary,
    [styles.small]: small,
    [styles.inline]: inline,
  });

  return (
    <button className={classNames} {...attributes}>
      {children}
    </button>
  );
};
