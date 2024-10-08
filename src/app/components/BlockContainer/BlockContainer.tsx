import styles from './blockContainer.module.scss';
import cn from 'classnames';

interface Props {
  children?: any;
  flex?: boolean;
  column?: boolean;
  inline?: boolean;
  left?: boolean;
  spaceBetween?: boolean;
  noPadding?: boolean;
}

export default function BlockContainer({
  flex = false,
  column = false,
  inline = false,
  left = false,
  spaceBetween = false,
  noPadding = false,
  children,
}: Props) {
  const classNames = cn(styles.BlockContainer, {
    [styles.flex]: flex,
    [styles.column]: column,
    [styles.inline]: inline,
    [styles.left]: left,
    [styles.spaceBetween]: spaceBetween,
    [styles.noPadding]: noPadding,
  });
  // Obviously I need a better way to right that classname
  return <div className={classNames}>{children}</div>;
}