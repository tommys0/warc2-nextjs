import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Moje hry</h1>
            <p>Tady si muzes upravovat informace o svych hrach</p>
            <p>Projdi si seznam svych her</p>
            <Link href="/games">
                <p className={styles.link}>Klikni zde pro zobrazeni tvych her</p>
            </Link>
        </div>
    );
}
