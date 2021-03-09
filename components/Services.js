import React from 'react';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services() {
    return (
        <div>
            <div className={styles["services"]} id="portfolio">
                <h1>Meu futuro só depende de mim.</h1>
                <div className={styles["services__container"]}>
                    <div className={styles["services__card"]}>
                        <h2>Move It</h2>
                        <p>NLW34 Rockseat</p>
                        <Link href="https://moveit-dhs74l6o0-wancla.vercel.app"><button>Saiba Mais</button></Link>
                    </div>
                    <div className={styles["services__card"]}>
                        <h2>Twitter Clone</h2>
                        <p>React.js</p>
                        <Link href="#">
                            <button>Saiba Mais</button>
                        </Link>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
