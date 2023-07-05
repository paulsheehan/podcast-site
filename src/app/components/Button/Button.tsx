import styles from '../../styles/ButtonLink.module.scss';
import cn from 'classnames';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  small?: boolean;
}

export const Button = ({
  primary = true,
  small = false,
  children,
  ...attributes
}: Button) => {
  const classNames = cn(styles.Button, {
    [styles.primary]: primary,
    [styles.secondary]: !primary,
    [styles.small]: small,
  });

  return (
    <button className={classNames} {...attributes}>
      {children}
    </button>
  );
};
