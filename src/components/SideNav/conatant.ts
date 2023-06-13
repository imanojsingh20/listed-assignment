import Dashboard from '../../assets/icons/dashboard.svg';
import Transaction from '../../assets/icons/transaction.svg';
import Schedules from '../../assets/icons/schedules.svg';
import Users from '../../assets/icons/users.svg';
import Settings from '../../assets/icons/setting.svg';
import { signOut } from 'next-auth/react';

export const NAV_ITEMS = [
    {
        name: 'Dashboard',
        link: '/',
        icon: Dashboard,
        id: 1,
    },
    {
        name: 'Transactions',
        link: '/transactions',
        icon: Transaction,
        id: 2,
    },
    {
        name: 'Schedules',
        link: '/schedules',
        icon: Schedules,
        id: 3,
    },
    {
        name: 'Users',
        link: '/users',
        icon: Users,
        id: 4,
    },
    {
        name: 'Settings',
        link: '/settings',
        icon: Settings,
        id: 5,
    },
];

export const NAV_SUB_ITEMS = [
    {
        name: 'Help',
        link: '/help',
        id: 1,
    },
    {
        name: 'Contact Us',
        link: '/contact',
        id: 2,
    },
    {
        name: 'Sign Out',
        link: '/',
        cb: () => signOut(),
        id: 3,
    },
];
