import styles from './page.module.scss';
import { Montserrat } from 'next/font/google';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';
import { useSession } from 'next-auth/react';
import { signOut, signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Session, getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '../../utils/auth';
const montserrat = Montserrat({ subsets: ['latin'], weight: '700' });

interface ISigninProps {
    session: Session;
}

export default function Signin({ session }: ISigninProps) {
    console.log('session', session);

    const googleSigin = useCallback(() => {
        signIn('google');
    }, []);

    return (
        <main className={`${styles.main} ${montserrat.className}`}>
            <div className={styles.brandText}>
                <span>Board.</span>
            </div>
            <div className={styles.signinWrapper}>
                <div>
                    {/* Sign In Form */}
                    <h1>Sign In</h1>
                    <p>Sign in to your account</p>
                    <div className={styles.socialSigin}>
                        <Button type='submit' variant='Primary' onClick={googleSigin}>
                            <span className={styles.socialBtn}>
                                <Image priority src={GoogleIcon} alt='Sign in with Google' />
                                Sign in with Google
                            </span>
                        </Button>
                        <Button type='submit' variant='Primary' onClick={() => signOut()}>
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
