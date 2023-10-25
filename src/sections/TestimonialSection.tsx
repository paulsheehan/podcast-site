import Carousel from '@/app/components/Carousel/Carousel';
import Heading from '@/app/components/Heading/Heading';
import TestimonialCard from '@/app/components/TestimonialCard/TestimonialCard';

import styles from './section.module.scss';
import Image from 'next/image';
import cn from 'classnames';

const testimonialBG = (
  <Image
    src="/sparkle.svg"
    alt="Background sparkle image"
    width={105}
    height={105}
  />
);

const testimonialData = [
  {
    name: 'luna lovegood',
    brandSrc: './spotify-sm.svg',
    paragraph:
      'Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.',
    avatarSrc: './luna-avatar.svg',
  },
];

export default function TestimonialSection() {
  const classNames = cn(styles.Section, styles.darkBg);
  return (
    <section className={classNames}>
      <Heading
        title="What our listeners say"
        paragraph="Their experience throughout every platform"
        image={testimonialBG}
        left={true}
      />
      <Carousel>
        <TestimonialCard
          name={testimonialData[0].name}
          paragraph={testimonialData[0].paragraph}
          avatarSrc={testimonialData[0].avatarSrc}
          brandSrc={testimonialData[0].brandSrc}
        />
        <TestimonialCard
          name={testimonialData[0].name}
          paragraph={testimonialData[0].paragraph}
          avatarSrc={testimonialData[0].avatarSrc}
          brandSrc={testimonialData[0].brandSrc}
        />
        <TestimonialCard
          name={testimonialData[0].name}
          paragraph={testimonialData[0].paragraph}
          avatarSrc={testimonialData[0].avatarSrc}
          brandSrc={testimonialData[0].brandSrc}
        />
      </Carousel>
    </section>
  );
}
