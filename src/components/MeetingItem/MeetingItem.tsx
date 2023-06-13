import React from 'react';
import { IMeetingItemProps } from './meetingitem.interface';
import styles from './meetingItem.module.scss';

const MeetingItem = ({ title, time, location, borderColor }: IMeetingItemProps) => {
    return (
        <div className={styles.meetingWrapper} style={{ borderColor: borderColor }}>
            <small className={styles.title}>{title}</small>
            <small className={styles.time}>{time}</small>
            <small className={styles.location}>{location}</small>
        </div>
    );
};

export default MeetingItem;
