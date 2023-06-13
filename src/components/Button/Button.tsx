import React from 'react';
import { ButtonVariant, IButtonProps } from './button.interface';
import styles from './button.module.scss';

const getVairantStyles = (variant?: ButtonVariant) => {
    switch (variant) {
        case 'Primary': {
            return styles.primaryBtn;
        }
        case 'Seconday': {
            return styles.secondaryBtn;
        }

        default:
            return styles.primaryBtn;
    }
};

const Button = ({ fullWidth, className, children, variant, ...rest }: IButtonProps) => {
    const variantStyles = getVairantStyles(variant);

    return (
        <button {...rest} className={`${styles.button} ${fullWidth && styles.fullWidth} ${variantStyles} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
