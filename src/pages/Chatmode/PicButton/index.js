import React from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import { randerNumber } from '../../../utils/randomNumber/index'

const picButton = (props) => {
    const { title, pic } = props
    return (
        <>
            <Link className={`${styles.picBtnWrap} ${styles.spaceMargin}`}>
                <img src={pic} alt="大廳聊吧" />
                <p className={styles.chatTitle}>
                    {title}
                    <span className={styles.chatText}>聊吧</span>
                </p>
                <p className={styles.onlineCount}>在線聊客：<span>{randerNumber()}</span></p>
            </Link>
        </>
    )
}
export default picButton;
