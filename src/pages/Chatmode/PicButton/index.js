import React from 'react';
import styles from './styles.module.scss';
import { useHistory } from "react-router-dom";

import { randerNumber } from '../../../utils/randomNumber/index'

const PicButton = (props) => {
    const { title, pic, chatroomType } = props
    const history = useHistory();
    
    const wichChatLobby = () => {
        chatroomType === 'password' ? history.push(`/ChatPsw`) : history.push(`/Chat/${chatroomType}`)
    }
    return (
        <>
            <div onClick={wichChatLobby} className={`${styles.picBtnWrap} ${styles.spaceMargin}`}>
                <img src={pic} alt="大廳聊吧" />
                <p className={styles.chatTitle}>
                    {title}
                    <span className={styles.chatText}>聊吧</span>
                </p>
                <p className={styles.onlineCount}>在線聊客：<span>{randerNumber()}</span></p>
            </div>
        </>
    )
}
export default PicButton;
