export const dashboardData = {
    weekLyUserChart: [
        {
            label: 'Guest',
            data: [200, 400, 200, 300, 200, 400, 300],
        },
        {
            label: 'User',
            data: [100, 300, 150, 400, 200, 400, 300],
        },
    ],
    productChart: [
        {
            lable: 'Basic Tees',
            sale: 55,
        },
        {
            lable: 'Custom Short Pants',
            sale: 14,
        },
        {
            lable: 'Super Hoodies',
            sale: 31,
        },
    ],
};

export type DashboardType = typeof dashboardData;
