"use client"

import styles from './page.module.css';
import Link from "next/link";
import React, { useState } from 'react';

export const gamesData = [
    {
        "id": 1,
        "title": "The Lost Expedition",
        "genre": "Adventure",
        "release_date": "2021-05-15",
        "description": "Embark on a perilous journey through uncharted territories in search of a legendary treasure."
    },
    {
        "id": 2,
        "title": "Galactic Conquest",
        "genre": "Strategy",
        "release_date": "2020-11-28",
        "description": "Build your empire, conquer planets, and lead your armies to victory in this epic space strategy game."
    },
    {
        "id": 3,
        "title": "Dark Shadows",
        "genre": "Horror",
        "release_date": "2019-10-31",
        "description": "Explore haunted locations, uncover dark secrets, and survive terrifying encounters with supernatural beings."
    },
    {
        "id": 4,
        "title": "Street Legends",
        "genre": "Action",
        "release_date": "2018-07-22",
        "description": "Rise through the ranks of the underground street racing scene, customize your ride, and take on rival crews."
    },
    {
        "id": 5,
        "title": "Fantasy Quest",
        "genre": "RPG",
        "release_date": "2017-03-10",
        "description": "Embark on an epic adventure, battle mythical creatures, and unravel the mysteries of a magical world."
    },
    {
        "id": 6,
        "title": "Minecraft",
        "genre": "Sandbox",
        "release_date": "2009-11-07",
        "description": "This is the best game you will ever play. Nothing is better then this. Fortnite is for script kiddies."
    }
]

export function updateGamesData({ id, title, genre, releaseDate, description }) {
    let game = gamesData.find(game => game.id === id);
    if (game) {
        game.title = title;
        game.genre = genre;
        game.release_date = releaseDate;
        game.description = description;
    }
    console.log(gamesData);
}

export default function Dashboard() {
    const [data, setData] = useState(gamesData);
    return (
        <div>
            <p className={styles.nadpis}>Tvoje hry</p>
            <ul className={styles.cardlist}>
                {data.map(game => (
                    <li key={game.id} className={styles.card}>
                        <h3 className={styles.title}>{game.title}</h3>
                        <p className={styles.genre}><strong>Žánr:</strong> {game.genre}</p>
                        <p className={styles.releaseDate}><strong>Datum vydání:</strong> {game.release_date}</p>
                        <p className={styles.description}><strong>Popis:</strong> {game.description}</p>
                        <Link href={`/games/${game.id}/edit`}>
                            <p className={styles.editButton}>Edit</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
