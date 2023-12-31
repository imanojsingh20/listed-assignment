import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';
import { signOut, signIn } from 'next-auth/react';
import { useCallback } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Session, getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '../../utils/auth';
import styles from './signin.module.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

interface ISigninProps {
    session: Session;
}

export default function Signin({ session }: ISigninProps) {
    console.log('session', session);

    const googleSigin = useCallback(() => {
        signIn('google');
    }, []);

    return (
        <div>
            <Head>
                <title>Listed | Sign In</title>
            </Head>
            <main className={`${styles.main} ${montserrat.className}`}>
                <div className={styles.brandText}>
                    <span>Board.</span>
                </div>
                <div className={styles.signinWrapper}>
                    <div>
                        {/* Sign In Form */}
                        <div className={styles.title}>
                            <h1>Sign In</h1>
                            <p>Sign in to your account</p>
                        </div>
                        <div className={styles.socialSigin}>
                            <Button type='submit' variant='Primary' onClick={googleSigin} className={styles.socialLink}>
                                <span className={styles.socialBtn}>
                                    <Image priority src={GoogleIcon} alt='Sign in with Google' />
                                    Sign in with Google
                                </span>
                            </Button>
                            <Button type='submit' variant='Primary' onClick={() => signOut()} className={styles.socialLink}>
                                <span className={styles.socialBtn}>
                                    <Image priority src={AppleIcon} alt='Sign in with Apple' /> Sign in with Apple
                                </span>
                            </Button>
                        </div>
                        <form action=''>
                            <Input labelText='Email address' placeholder='johndoe@gmail.com' />
                            <Input labelText='Password' placeholder='******' type='password' />
                            <div>
                                <Link href='/' className={styles.link}>
                                    Forgot password?
                                </Link>
                            </div>

                            <div>
                                <Button type='submit' fullWidth variant='Seconday'>
                                    Sign In
                                </Button>
                            </div>
                        </form>
                        <div className={styles.signupLink}>
                            Don&apos;t have an account?{' '}
                            <Link href='/' className={styles.link}>
                                Register here
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res, NEXT_AUTH_OPTIONS);

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
};
