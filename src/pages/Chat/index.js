import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { Link, useLocation } from 'react-router-dom';

import { initNormalChat } from '../../fakeData/chatContent'
import { getCurrentTime } from '../../utils/changeTime'

import addIcon from '../../assets/images/addIcon.png';
import sendIcon from '../../assets/images/sendIcon.png';
import ducumentIcon from '../../assets/images/ducumentIcon.png';
import picIcon from '../../assets/images/picIcon.png';
import videoIcon from '../../assets/images/videoIcon.png';
import sendPlen from '../../assets/images/sendPlen.png';
import lock from '../../assets/images/lock.png'

import ChatTextBox from '../../components/ChatTextBox/index';

const Chat = (props) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();

    const chatRoomName = query.get("chatRoomName")
    const { chatroomType } = props.match.params
    console.log('chatroomType', chatroomType);
    const otherFeatures = [
        {
            img: picIcon,
            title: '照片',
            handleClick: (event) => uploadImage(event)
        }, {
            img: ducumentIcon,
            title: '文件',
            handleClick: (event) => uploadImage(event)
        }, {
            img: videoIcon,
            title: '影片',
            handleClick: (event) => uploadImage(event)
        }
    ]
    const messagesEndRef = useRef(null)
    const [commentText, setCommentText] = useState("");
    const [currentChats, setCurrentChats] = useState([]);
    const [isShowOtherFeature, setShowOtherFeature] = useState(false);
    const [fileSrc, setFileSrc] = useState("");

    useEffect(() => {
        setCurrentChats(currentChats.concat(initNormalChat))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (!fileSrc) return;
        // 傳送圖片
        let newMessage = {
            type: 'local',
            contentType: 'image',
            message: fileSrc,
            time: getCurrentTime()
        }
        let newChats = [...currentChats, newMessage]
        setCurrentChats(newChats);
        messagesEndRef.current.scrollIntoView({ behavior: "auto" })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fileSrc])


    const renderLockTitle = () => {
        if (chatroomType !== 'passwordRoom') return;
        return <>
            <div className={styles.passTitle}>
                <img src={lock} alt="鎖頭" />
                <p>{chatRoomName}</p>
            </div>
        </>

    }
    const showOtherFeature = () => {
        setShowOtherFeature(!isShowOtherFeature)
    }
    const sendMessage = () => {
        let newMessage = {
            type: 'local',
            contentType: 'text',
            message: commentText,
            time: getCurrentTime()
        }
        let newChats = [...currentChats, newMessage]
        setCurrentChats(newChats)
        setCommentText('')
        messagesEndRef.current.scrollIntoView({ behavior: "auto" })
    }
    const uploadImage = (event) => {
        if (!event.target.files[0]) return;
        setFileSrc(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div className={styles.bg} style={{ backgroundColor: '#353F67' }}>
            <>
                <div className={styles.titleWrap} style={{ backgroundColor: '#252B45' }}>
                    <Link to='/Chatmode'>
                        <p>離開</p>
                    </Link>
                    <h1>匿名聊客</h1>
                </div>
                {renderLockTitle()}
            </>
            <div className={styles.chatViewWrap} style={chatroomType === 'passwordRoom' ? { backgroundColor: '#303b64', paddingTop: '94px' } : { backgroundColor: '#303b64'}}>
                {
                    currentChats.map((chatItem, index) => {
                        const { type, contentType, message, time } = chatItem
                        return (
                            <ChatTextBox key={index} chatType={type} contentType={contentType} message={message} time={time} />
                        )
                    })
                }
                <div className={styles.messagesEnd} ref={messagesEndRef} />
            </div>
            <div className={styles.footerWrap} style={{ backgroundColor: '#6E7591' }}>
                <div className={styles.inputWrap}>
                    <div className={isShowOtherFeature ? styles.addIconWrapActive : styles.addIconWrap}>
                        <img src={addIcon} alt="其他功能按鍵" onClick={showOtherFeature} />
                    </div>
                    <TextareaAutosize
                        className={styles.commentTextArea}
                        name="commentTextArea"
                        type="text"
                        rows="1"
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                    />
                    <div className={styles.sendIconWrap}>
                        {
                            !commentText ? <img src={sendIcon} alt="啤酒" /> : <img onClick={() => sendMessage()} src={sendPlen} alt="發送按鈕" />
                        }
                    </div>
                </div>
                <div className={isShowOtherFeature ? styles.otherFeatureWrap : styles.noOtherFeatureWrap}>
                    {
                        otherFeatures.map(item => (
                            <label className={styles.futureIconWrap} key={item.title}>
                                <img src={item.img} alt="功能圖示" />
                                <p>{item.title}</p>
                                <input className={styles.uploadInput} type="file" accept="image/*" onChange={item.handleClick} />
                            </label>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Chat;