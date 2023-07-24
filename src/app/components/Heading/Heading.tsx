import styles from './heading.module.scss';
import BlockContainer from '../BlockContainer/BlockContainer';
import Image from 'next/image';
import cn from 'classnames';


interface Heading extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    paragraph?: string;
    image?: React.RefAttributes<HTMLImageElement | null>;
    left?: boolean;
}

export default function Heading({ title, paragraph, image, left=true}: Heading) {
  return (
    <div className={styles.Heading}>
        <BlockContainer flex column inline>
            {left? image: null}
            <h2>{title}</h2>
            <p>{paragraph}</p>
            {!left? image: null}
        </BlockContainer>
    </div>
  );
}
