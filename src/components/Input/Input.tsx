import React from 'react';
import styles from './input.module.scss';
import { IInputProps } from './input.interface';

const Input = ({ labelText, ...rest }: IInputProps) => {
    return (
        <div>
            {labelText && <label htmlFor={rest.name}>{labelText}</label>}
            <input className={styles.input} type='text' {...rest} />
        </div>
    );
};

export default Input;
