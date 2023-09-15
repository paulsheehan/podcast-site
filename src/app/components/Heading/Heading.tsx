import styles from './heading.module.scss';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import cn from 'classnames';

interface Props {
  title: string;
  paragraph?: string;
  image?: React.RefAttributes<HTMLImageElement | null>;
  left?: boolean;
}

export default function Heading({
  title,
  paragraph,
  image,
  left = true,
}: Props) {
  const classNames = cn(styles.Heading, {
    [styles.imgLeft]: left,
  });
  return (
    <div className={classNames}>
      <BlockContainer flex column inline>
        {image}
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </BlockContainer>
    </div>
  );
}
