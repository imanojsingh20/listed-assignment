import Revenue from './assets/icons/revenue.svg';
import TransactionDashboard from './assets/icons/tranaction.svg';
import Like from './assets/icons/like.svg';
import User from './assets/icons/user.svg';

export const CARD_DATA = [
    {
        icon: Revenue,
        title: 'Total Revenues',
        bgColor: '#DDEFE0',
        apiKey: 'revenue',
    },
    {
        icon: TransactionDashboard,
        title: 'Total Transactions',
        bgColor: '#F4ECDD',
        apiKey: 'transaction',
    },
    {
        icon: Like,
        title: 'Total Likes',
        bgColor: '#EFDADA',
        apiKey: 'like',
    },
    {
        icon: User,
        title: 'Total Users',
        bgColor: '#DEE0EF',
        apiKey: 'user',
    },
];

export const LINE_CHART_DATA = {
    labels: new Array(5).fill(1).map((_, index) => 'Week ' + (index + 1)),
    datasets: [
        {
            label: 'Guest',
            data: [],
            fill: false,
            borderColor: '#E9A0A0',
            tension: 0.5,
        },
        {
            label: 'User',
            data: [],
            fill: false,
            borderColor: '#9BDD7C',
            tension: 0.5,
        },
    ],
};

export const PIE_CHART_DATA = {
    labels: [],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4,
        },
    ],
};

export const MEETINGS = [
    {
        title: 'Meeting with suppliers from Kuta Bali',
        time: '14.00-15.00',
        location: 'at Sunset Road, Kuta, Bali ',
        borderColor: '#9BDD7C',
        id: 1,
    },
    {
        title: 'Check operation at Giga Factory 1',
        time: '18.00-20.00',
        location: 'at Central Jakarta  ',
        borderColor: '#6972C3',
        id: 2,
    },
];

export const BASE_URL = process.env.BASE_URL;
