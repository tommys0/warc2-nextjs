"use client"

import styles from './page.module.css';
import { gamesData } from "../../page";
import { updateGamesData } from "../../page";
import Link from "next/link";
import { useState } from "react";

export default function PageEdit({ params }) {
    const selectedGame = gamesData.find(game => game.id === parseInt(params.id));
    const [gameTitle, setGameTitle] = useState(selectedGame.title);
    const [gameGenre, setGameGenre] = useState(selectedGame.genre);
    const [gameReleaseDate, setGameReleaseDate] = useState(selectedGame.release_date);
    const [gameDescription, setGameDescription] = useState(selectedGame.description);

    if (!selectedGame) {
        return (
            <p>Game not found.</p>
        );
    }

    function saveData() {
        console.log("Game title: " + gameTitle);
        console.log("Game description: " + gameDescription);
        console.log("Game genre: " + gameGenre);
        console.log("Game release date: " + gameReleaseDate);
        updateGamesData ({
            id: selectedGame.id,
            title: gameTitle,
            genre: gameGenre,
            releaseDate: gameReleaseDate,
            description: gameDescription
        });
    }

    return (
        <div className={styles.editForm}>
            <label>
                <input type="text" className={styles.formInputField} value={gameTitle}
                       onChange={(e) => setGameTitle(e.target.value)}/>
                <input type="text" className={styles.formInputField} value={gameGenre}
                       onChange={(e) => setGameGenre(e.target.value)}/>
                <input type="text" className={styles.formInputField} value={gameReleaseDate}
                       onChange={(e) => setGameReleaseDate(e.target.value)}/>
                <input type="text" className={styles.formInputField} value={gameDescription}
                       onChange={(e) => setGameDescription(e.target.value)}/>
            </label>
            <button onClick={saveData}>Save</button>
            <button className={styles.goBackButton}><Link href="/games">Back</Link></button>
        </div>
    );
}
