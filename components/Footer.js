import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div>
           <div className={styles["footer__container"]}>
                <div className={styles["footer__links"]}>
                    <div className={styles["footer__link--wrapper"]}>
                        <div className={styles["footer__link--items"]}>
                            <h2>Sobre Min</h2>
                            <Link href="/sign__up">
                                <a >Meus Projetos</a> 
                            </Link>
                            <Link href="/">
                                <a >Equipe</a>
                            </Link>
                            <Link href="/">
                                 <a>Carreira</a> 
                            </Link>                         
                        
                        </div>
                        <div className={styles["footer__link--items"]}>
                            <h2>Contato</h2>
                            <a href="/"></a> 
                            <a href="/">Support</a>
                            <a href="/">Destinations</a> 
                            <a href="/">Sponsorships</a>
                        </div>
                    </div>
                    <div className={styles["footer__link--wrapper"]}>
                        <div className={styles["footer__link--items"]}>
                            <h2>Videos</h2>
                            <a href="/">Submit Video</a> 
                            <a href="/">Ambassadors</a>
                            <a href="/">Agency</a> 
                            <a href="/">Influencer</a>
                        </div>
                        <div className={styles["footer__link--items"]}>
                            <h2>Social Media</h2>
                            <a href="https://www.instagram.com/wanclaf/">Instagram</a> 
                            <a href="https://www.facebook.com/wanclei.felipe/">Facebook</a>
                            <a href="https://github.com/wancla">Github</a> 
                            <a href="https://twitter.com/Wancla1">Twitter</a>
                            <a href="https://linkedin/wancleifelipe">LinkedIn </a>
                        </div>
                    </div>
                </div>

            <section className={styles["social__media"]}>
                <div className={styles["social__media--wrap"]}>
                    <div className={styles["footer__logo"]}>
                        <a href="/" id={styles["footer__logo"]}><i className="fab fa-d-and-d"></i>BLOG</a>
                    </div>
                    <p className={styles["website__rights"]}>© WANCLA 2021. All rights reserved</p>
                    <div className={styles["social__icons"]}>
                        <a className={styles["social__icon--link"]} href="https://www.facebook.com/wanclei.felipe/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className={styles["social__icon--link"]} href="https://www.instagram.com/wanclaf/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className={styles["social__icon--link"]} href="https://github.com/wancla" target="_blank" aria-label="github">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className={styles["social__icon--link"]} href="https://twitter.com/Wancla1" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className={styles["social__icon--link"]} href="https://linkedin/wancleifelipe" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
          </div> 
       </div>
    )
}
