import '@/styles/globals.scss';
import SessionProvidersWrapper from '@/utils/Providers/SessionProvidersWrapper';
import { Session } from 'next-auth';
import type { AppProps } from 'next/app';

interface IAppProps extends AppProps {
    session: Session;
}

export default function App({ Component, pageProps, session }: IAppProps) {
    return (
        <SessionProvidersWrapper session={session}>
            <Component {...pageProps} />
        </SessionProvidersWrapper>
    );
}
