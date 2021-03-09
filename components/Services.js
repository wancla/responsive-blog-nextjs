import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Services.module.css';
import popup from './PopUpError';
import PopUpError from './PopUpError';

export default function Services() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const showPopUp = () => setButtonPopUp(!buttonPopUp);

    return (
        <div>
            <div className={styles["services"]} id="portfolio">
                <h1>Meu futuro só depende de mim.</h1>
                <div className={styles["services__container"]}>
                    <div className={styles["services__card"]}>
                        <h2>Move It</h2>
                        <p>NLW34 Rockseat</p>
                        <Link href="https://moveit-wancla.vercel.app"><button>Saiba Mais</button></Link>
                    </div>
                    <div className={styles["services__card"]}>
                        <h2>Twitter Clone</h2>
                        <p>React.js</p> 
                        <Link href="#">                     
                            <button onClick={showPopUp}>Saiba Mais</button>                          
                        </Link>                                         
                    </div>
                    <PopUpError trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                        <h2>Ops!</h2>
                        <p>O Projeto Twitter Clone ainda não está Disponível.</p>
                    </PopUpError>    
                </div>
            </div>
        </div>
    )
}
