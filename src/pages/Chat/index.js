/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
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
import { getWeatherAsync } from '../../store/rootReducer';

const Chat = (props) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const dispatch = useDispatch();
    const nickName = useSelector((state) => state.nickName);
    const weatherResultData = useSelector((state) => state.weatherResultData);
    const query = useQuery();
    const chatRoomName = query.get("chatRoomName")
    const { chatroomType } = props.match.params
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
    const messagesTopRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [commentText, setCommentText] = useState("");
    const [currentChats, setCurrentChats] = useState([]);
    const [isShowOtherFeature, setShowOtherFeature] = useState(false);
    const [fileSrc, setFileSrc] = useState("");

    useEffect(() => {
        messagesTopRef.current.scrollIntoView({ behavior: "auto" })
        if (chatroomType === 'weather') {
            fetchWeather();
            let startWeatherChat = {
                type: 'remote',
                contentType: 'text',
                message: `你好${nickName}，想問目前的天氣嗎？`+ '\n' + `請輸入想查詢的縣市`,
                time: getCurrentTime()
            };
            setCurrentChats([startWeatherChat])
        } else {
            setCurrentChats(currentChats.concat(initNormalChat))
        }
        return () => {
            setCurrentChats([])
            dispatch({
                type: 'INIT_WEATHER_CHAT',
            });
        };
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
    const sendMessage = async () => {
        let localNewMessage = {
            type: 'local',
            contentType: 'text',
            message: commentText,
            time: getCurrentTime()
        }
        if (chatroomType === 'weather') {
            let filterNewWeatherData = weatherResultData.filter(weatherItem => weatherItem.locationName === commentText);
            if (filterNewWeatherData.length === 0) {
                let remoteNewMessage = {
                    type: 'remote',
                    contentType: 'text',
                    message: '請輸入您想查詢的縣市',
                    time: getCurrentTime()
                }
                let newChats = [...currentChats, localNewMessage, remoteNewMessage]
                setCurrentChats(newChats)
            } else {
                const { weatherElement } = filterNewWeatherData[0]
                let remoteWeatherText = 
                `天氣狀況：${weatherElement[0].time[0].parameter.parameterName}`+`\n`+
                `降雨機率：${weatherElement[1].time[0].parameter.parameterName}%`+`\n`+
                `氣溫：${weatherElement[2].time[0].parameter.parameterName}°C ～ ${weatherElement[4].time[0].parameter.parameterName}°C`+`\n`+
                `體感：${weatherElement[3].time[0].parameter.parameterName}`+`\n`
                let remoteNewMessage = {
                    type: 'remote',
                    contentType: 'text',
                    message: remoteWeatherText,
                    time: getCurrentTime()
                }
                let newChats = [...currentChats, localNewMessage, remoteNewMessage]
                setCurrentChats(newChats)
            }
        } else {
            let newChats = [...currentChats, localNewMessage]
            setCurrentChats(newChats)
        }
        setCommentText('')
        messagesEndRef.current.scrollIntoView({ behavior: "auto" })

    }
    const uploadImage = (event) => {
        if (!event.target.files[0]) return;
        setFileSrc(URL.createObjectURL(event.target.files[0]));
    }
    const fetchWeather = () => {
        dispatch(getWeatherAsync());
    }

    return (
        <div className={styles.bg} style={{ backgroundColor: '#353F67' }}>
            <>
                <div className={styles.titleWrap} style={chatroomType === 'passwordRoom' ? { backgroundColor: '#323f6a' } : { backgroundColor: '#252B45' }}>
                    <Link to='/Chatmode'>
                        <p>離開</p>
                    </Link>
                    <h1>匿名聊客</h1>
                </div>
                {renderLockTitle()}
            </>
            <div className={styles.messagesTop} ref={messagesTopRef} />
            <div className={styles.chatViewWrap} style={chatroomType === 'passwordRoom' ? { backgroundColor: '#242b47', paddingTop: '94px' } : { backgroundColor: '#303b64' }}>
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
            <div className={styles.footerWrap} style={chatroomType === 'passwordRoom' ? { backgroundColor: '#62677b' } : {backgroundColor: '#6E7591'}}>
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