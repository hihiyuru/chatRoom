import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

import { initNormalChat } from '../../fakeData/chatContent'

import addIcon from '../../assets/images/addIcon.png';
import sendIcon from '../../assets/images/sendIcon.png';
import ChatTextBox from '../../components/ChatTextBox/index';
import { Link } from 'react-router-dom';

const Chat = (props) => {
    // const { chatroomType } = props.match.params
    // console.log('chatroomType', chatroomType);
    const [viewHeight, setViewHeight] = useState(0);
    const [commentText, setCommentText] = useState("");
    const [currentChats, setCurrentChats] = useState([]);

    useEffect(() => {
        setViewHeight(window.innerHeight - 111)
    }, []);
    useEffect(() => {
        setCurrentChats(currentChats.concat(initNormalChat))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const focusFooterHeight = () => {
    }
    const blurFooterHeight = () => {
    }
    return (
        <div className={styles.bg} style={{ backgroundColor: '#353F67' }}>
            <div className={styles.titleWrap} style={{ backgroundColor: '#252B45' }}>
                <Link to='/Chatmode'>
                    <p>離開</p>
                </Link>
                <h1>匿名聊客</h1>
            </div>
            <div className={styles.chatViewWrap} style={{ minHeight: viewHeight }}>
                {
                    currentChats.map((chatItem, index) => {
                        const { type, message, time } = chatItem
                        return (
                            <ChatTextBox key={index} chatType={type} message={message} time={time} />
                        )
                    })
                }
            </div>
            <div className={styles.footerWrap} style={{ backgroundColor: '#6E7591' }}>
                <div className={styles.addIconWrap}>
                    <img src={addIcon} alt="其他功能按鍵" />
                </div>
                <TextareaAutosize
                    className={styles.commentTextArea}
                    name="commentTextArea"
                    type="text"
                    onFocus={focusFooterHeight}
                    onBlur={blurFooterHeight}
                    rows="1"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <div className={styles.sendIconWrap}>
                    <img src={sendIcon} alt="發送按鈕" />
                </div>
            </div>
        </div>
    )
}

export default Chat;