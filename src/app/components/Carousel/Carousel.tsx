import styles from './carousel.module.scss';
import { useRef, useState, Children } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
}

export default function Carousel({ children }: Props) {
  const classNames = cn(styles.carousel);

  const ref = useRef<HTMLUListElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trackMouse, setTrackMouse] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(true);

  const arrayChildren = Children.toArray(children);
  
  const x = useMotionValue(0);

  const handleMouseMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!ref.current) return;
    if (!trackMouse) return;

    setAnimationComplete(false);

    const xVal = e.pageX - ref.current.offsetLeft;
    const walk = (xVal - startX) * 2; //scroll-fast

    const controls = animate(x, scrollLeft - walk, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
      onComplete: () => {
        setAnimationComplete(true);
      },
      onStop: () => {
        setAnimationComplete(true);
      }
    });
    return controls.stop;
  };

  const handleMouseDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!ref.current) return;

    setTrackMouse(true);

    const startX = e.pageX - ref.current.offsetLeft;
    setStartX(startX);

    const scrollLeft = ref.current.scrollLeft;
    setScrollLeft(scrollLeft);
  };

  const handleMouseLeave = () => {
    setTrackMouse(false);
  };

  const handleMouseUp = () => {
    setTrackMouse(false);
  };

  return (
    <div className={classNames}>
        <motion.ul className={styles.carouselContainer}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}>
            {Children.map(arrayChildren, (child, index) => {
                return <motion.li className={styles.carouselItem}>{child}</motion.li>;
            })}
        </motion.ul>
    </div>
  );
}
