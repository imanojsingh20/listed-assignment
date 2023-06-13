import styles from './dashboard.module.scss';
import { CARD_DATA, LINE_CHART_DATA, MEETINGS, PIE_CHART_DATA } from '../constant';
import Image from 'next/image';
import Bell from '../assets/icons/bell.svg';
import Input from '@/components/Input/Input';
import StatsCard from '@/components/StastCard/StatsCard';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import MeetingItem from '@/components/MeetingItem/MeetingItem';
import RightArrow from '../assets/icons/bell.svg';
import SideNav from '@/components/SideNav/SideNav';

import { NEXT_AUTH_OPTIONS } from '@/utils/auth';
import { Session, getServerSession } from 'next-auth';
import { Montserrat } from 'next/font/google';
import { GetServerSideProps } from 'next';
import { StatsType } from './api/stats/stats.type';
import { DashboardType } from './api/dashboard/dashboard.type';
const montserrat = Montserrat({ subsets: ['latin'] });

const LINE_CHART_DATA_COPY = JSON.parse(JSON.stringify(LINE_CHART_DATA));
const PIE_CHART_DATA_COPY = JSON.parse(JSON.stringify(PIE_CHART_DATA));

interface IDashboardProps {
    session: Session;
    stats: StatsType;
    dashboardData: DashboardType;
}

export default function Dashboard({ session, stats, dashboardData }: IDashboardProps) {
    useEffect(() => {
        LINE_CHART_DATA_COPY.datasets[0].data = dashboardData.weekLyUserChart[0].data as [];

        LINE_CHART_DATA_COPY.datasets[1].data = dashboardData.weekLyUserChart[1].data as [];

        const topProductsLabels = dashboardData.productChart.map((product) => product.lable);

        const topProductsData = dashboardData.productChart.map((product) => product.sale);

        PIE_CHART_DATA_COPY.labels = topProductsLabels as [];
        PIE_CHART_DATA_COPY.datasets[0].data = topProductsData as [];

        const lineGraph = new Chart(document.getElementById('line-chart') as HTMLCanvasElement, {
            type: 'line',
            data: LINE_CHART_DATA_COPY,
            options: {
                responsive: true,
                aspectRatio: 5,
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                        align: 'end',
                    },
                },
                scales: {
                    y: {
                        max: 500,
                        min: 0,
                        ticks: {
                            stepSize: 100,
                        },
                    },
                    x: {
                        min: 0,
                        beginAtZero: true,
                    },
                },
            },
        });

        const pieChart = new Chart(document.getElementById('pie-chart') as HTMLCanvasElement, {
            type: 'pie',
            data: PIE_CHART_DATA_COPY,
            options: {
                responsive: true,
                aspectRatio: 3,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                        },
                    },
                },
            },
        });

        return () => {
            lineGraph.destroy();
            pieChart.destroy();
        };
    }, [dashboardData]);

    return (
        <main className={`${styles.mainContainer} ${montserrat.className}`}>
            <SideNav />
            <section className={styles.mainSideRight}>
                <div className={styles.header}>
                    <h1>Dashboard</h1>
                    <div className={styles.topActions}>
                        <Input placeholder='Search...' />
                        <Image priority src={Bell} alt='Sign in with Google' />
                        {session?.user?.image && (
                            <Image priority src={session?.user?.image} width={30} height={30} alt='User profile image' className={styles.avatar} />
                        )}
                    </div>
                </div>
                <div className={styles.cardsWrapper}>
                    {CARD_DATA.map((card) => (
                        <StatsCard key={card.title} icon={card.icon} title={card.title} value={(stats as any)[card.apiKey]} bgColor={card.bgColor} />
                    ))}
                </div>
                <div className={styles.lineCartWrapper}>
                    <div className={styles.card}>
                        <div className={styles.chartTitle}>Activities</div>
                        <div></div>
                        <canvas id='line-chart' className={styles.lineChart} />
                    </div>
                </div>
                <div className={styles.smallChartWrapper}>
                    <div className={styles.card}>
                        <div className={styles.chartTitle}>Top products</div>
                        <canvas id='pie-chart' className={styles.lineChart} />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.chartTitle}>
                            Today&apos;s schedule
                            <small className={styles.moreCTA}>
                                <span>See All</span>
                                <Image priority src={RightArrow} alt='Sign in with Google' />
                            </small>
                        </div>
                        <div className={styles.meetingWrapper}>
                            {MEETINGS.map((meeting) => (
                                <MeetingItem
                                    key={meeting.id}
                                    borderColor={meeting.borderColor}
                                    title={meeting.title}
                                    time={meeting.time}
                                    location={meeting.location}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const [session, stats, dashboardData] = await Promise.all([
        getServerSession(context.req, context.res, NEXT_AUTH_OPTIONS),
        fetch('http://localhost:3000/api/stats').then((res) => res.json()),
        fetch('http://localhost:3000/api/dashboard').then((res) => res.json()),
    ]);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
            stats,
            dashboardData,
        },
    };
};
