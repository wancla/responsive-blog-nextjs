import React from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <div>
            <div className={styles["main"]}>
                <div className={styles["main__container"]}>
                    <div className={styles["main__content"]}>
                        <h1>FRONT <br/> END</h1>
                        <h2>DEVELOPER</h2>
                        <p>Wanclei Felipe Vieira dos Santos</p>
                        <Link href="#">
                            <button className={styles["main__btn"]}><a>Saiba Mais</a></button>
                        </Link>                        
                    </div>
                    <div className={styles["main__img--container"]}>
                        <img id={styles["main__img"]} src="img/undraw_feeling_proud_qne1.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
