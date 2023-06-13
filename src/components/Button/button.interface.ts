import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'Primary' | 'Seconday';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    variant?: ButtonVariant;
    children: ReactNode;
}
