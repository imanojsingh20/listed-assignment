// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { DashboardType, dashboardData } from './dashboard.type';

export default function handler(req: NextApiRequest, res: NextApiResponse<DashboardType>) {
    res.status(200).json(dashboardData);
}
