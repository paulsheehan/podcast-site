import styles from './blockContainer.module.scss';
import cn from 'classnames';

interface Props {
    children?: any,
    flex?: boolean,
    column?: boolean
}

export default function BlockContainer({flex=false, column=false, children}:Props) {
    const classNames = cn(styles.BlockContainer, {
        [styles.flex]: flex,
        [styles.column]: column
    });
    return (
        <div className={classNames}>
            {children}
        </div>
    );
}
