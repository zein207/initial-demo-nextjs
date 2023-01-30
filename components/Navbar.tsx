import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>

            {
                menuItems.map(menuItem => (
                    <ActiveLink text={menuItem.text} href={menuItem.href} key={menuItem.text} />
                ))
            }
            
        </nav>
    )
}
