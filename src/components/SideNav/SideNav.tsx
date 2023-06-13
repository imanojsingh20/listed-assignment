import React, { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS, NAV_SUB_ITEMS } from './conatant';
import styles from './sidenav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const SideNav = () => {
    const pathName = usePathname();
    const hamButtonRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen((prevState) => !prevState);
    }

    useOnClickOutside(hamButtonRef, () => {
        setMenuOpen(false);
    });

    return (
        <section ref={hamButtonRef} className={`${styles.sideNav} ${menuOpen && styles.hamMenuOpen}`}>
            <div>
                <h1 className={styles.brand}>Board.</h1>
                <ul>
                    {NAV_ITEMS.map((nav) => (
                        <li key={nav.id} className={`${styles.navItem} ${pathName === nav.link && styles.bold}`}>
                            <Link href={nav.link}>
                                <Image priority src={nav.icon} alt='Sign in with Google' />
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className={styles.navSub}>
                {NAV_SUB_ITEMS.map((nav) => (
                    <li key={nav.id} className={styles.navSubItem}>
                        {nav?.cb ? <span onClick={nav.cb}>{nav.name}</span> : <Link href={nav.link}>{nav.name}</Link>}
                    </li>
                ))}
            </ul>
            <span className={styles.hamIcon} onClick={toggleMenu}>
                &#9776;
            </span>
        </section>
    );
};

export default SideNav;
