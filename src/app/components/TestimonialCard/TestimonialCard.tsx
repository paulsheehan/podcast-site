import BlockContainer from '@/app/components/BlockContainer/BlockContainer';
import Image from 'next/image';
import Link from 'next/link';
import styles from './testimonial.module.scss';
import cn from 'classnames';

interface Props {
  name?: string;
  paragraph?: string;
  avatarSrc?: string;
  brandSrc?: string;
}

export default function TestimonialCard({
  name,
  paragraph,
  avatarSrc,
  brandSrc,
}: Props) {
  const classNames = cn(styles.TestimonialCard);
  return (
    <div className={classNames}>
        <BlockContainer flex column left>
            <Image
                src="/quote-symbol.svg"
                alt="Quotation mark"
                width={48}
                height={48}
            />
            <p className={styles.paragraph}>
                { paragraph }
            </p>
            <BlockContainer flex left>
                {
                    avatarSrc? 
                        <Image
                        src={avatarSrc}
                        alt="Avatar Image"
                        width={48}
                        height={48}
                    />: null}
                <span>{name},</span>
                {
                    brandSrc? 
                        <Image
                        src={brandSrc}
                        alt="Brand name and Image"
                        width={53}
                        height={22}
                    />: null
                }
            </BlockContainer>
        </BlockContainer>
    </div>
  );
}
