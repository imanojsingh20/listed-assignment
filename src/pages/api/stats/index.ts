// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { StatsType } from './stats.type';

const data = {
    revenue: '$2,129,430',
    transaction: '1,520',
    like: '9,721',
    user: '892',
};

export default function handler(req: NextApiRequest, res: NextApiResponse<StatsType>) {
    res.status(200).json(data);
}
