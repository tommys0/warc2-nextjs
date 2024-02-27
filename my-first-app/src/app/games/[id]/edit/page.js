import styles from './page.module.css';
import { gamesData } from "@/app/games/page";
import Link from "next/link";

export default function Page({ params }) {
    const selectedGame = gamesData.find(game => game.id === parseInt(params.id));

    if (!selectedGame) {
        return (
            <p>Game not found.</p>
        )
    }

    return (
        <div className={styles.gameDetails}>
            <h2 className={styles.title}>{selectedGame.title}</h2>
            <p className={styles.genre}><strong>Genre:</strong> {selectedGame.genre}</p>
            <p className={styles.releaseDate}><strong>Release Date:</strong> {selectedGame.release_date}</p>
            <p className={styles.description}><strong>Description:</strong> {selectedGame.description}</p>
            <Link href={`/games/`}>
                <p className={styles.goBackButton}>Go Back</p>
            </Link>
        </div>
    );
}
