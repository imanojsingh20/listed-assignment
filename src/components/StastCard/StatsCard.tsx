import React from 'react';
import { IStatsCardProp } from './statscard.interface';
import Image from 'next/image';
import styles from './statscard.module.scss';

const StastCard = ({ icon, title, value, bgColor }: IStatsCardProp) => {
    return (
        <div className={styles.statsCard} style={{ background: bgColor }}>
            <div className={styles.iconWrapper}>
                <Image priority src={icon} alt='stats icon' />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.value}>{value}</div>
        </div>
    );
};

export default StastCard;
