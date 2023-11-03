import cn from 'classnames';
import styles from './episodeCard.module.scss';
import BlockContainer from '../BlockContainer/BlockContainer';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  imgSrc: string;
  title?: string;
  link?: string;
}

export default function EpisodeCard({ imgSrc, title, link }: Props) {
  const classNames = cn(styles.EpisodeCard, {
    [styles.noLink]: !link,
  });
  return (
    <Link className={classNames} href={link ? link : '#'}>
      <span className={styles.BgImg}>
        <Image
          src={imgSrc}
          width={375}
          height={375}
          alt="Podcast episode title"
        />
      </span>
      <div className={styles.CardContainer}>
        <BlockContainer flex column spaceBetween noPadding>
          <div className={styles.Socials}>
            <Image
              src="/episode-card-socials.svg"
              alt="Social media icons"
              width={92}
              height={24}
            />
          </div>
          <BlockContainer noPadding>
            {title ? <h3 className={styles.Title}>{title}</h3> : null}
          </BlockContainer>
        </BlockContainer>
      </div>
    </Link>
  );
}
