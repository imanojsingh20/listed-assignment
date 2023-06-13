import React from 'react';
import styles from './input.module.scss';
import { IInputProps } from './input.interface';

const Input = ({ labelText, className, icon, ...rest }: IInputProps) => {
    return (
        <div className={styles.wrapper}>
            {labelText && <label htmlFor={rest.name}>{labelText}</label>}
            <div className={styles.inputWrapper}>
                <input className={`${styles.input} ${className}`} type='text' {...rest} />
                {icon}
            </div>
        </div>
    );
};

export default Input;
