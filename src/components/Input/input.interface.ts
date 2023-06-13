import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    icon?: ReactNode;
}
