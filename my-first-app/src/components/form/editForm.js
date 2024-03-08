import styles from "@/app/games/[id]/edit/page.module.css";
import Link from "next/link";
import {gamesData} from "@/app/games/page";

export default function editForm() {
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