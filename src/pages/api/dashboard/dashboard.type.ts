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
            sale: 300,
        },
        {
            lable: 'Custom Short Pants',
            sale: 50,
        },
        {
            lable: 'Super Hoodies',
            sale: 100,
        },
    ],
};

export type DashboardType = typeof dashboardData;
