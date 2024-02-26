import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1> Vítejte v Aplikaci pro Správu Her!</h1>
            <p>Tato aplikace vám umožní snadnou správu her.</p>
            <p>Procházejte seznam her, upravujte jejich informace a mnoho dalšího.</p>
            <Link href="/games">
                <p className={styles.link}>Dashboard</p>
            </Link>
        </div>
    );
}
