import React from 'react';
import styles from '../styles/PopUpError.module.css';

export default function PopUpError(props) {
    return  (props.trigger) ? (
        <div className={styles["popup"]}>
            <div className={styles["popup-inner"]}>
                <button className={styles["close-btn"]} onClick={() => props.setTrigger(false)}>
                    <i className="fas fa-times"></i>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}
