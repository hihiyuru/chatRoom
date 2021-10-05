import React, { useState } from 'react';
import styles from './styles.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

import addIcon from '../../../../assets/images/addIcon.png';
import sendIcon from '../../../../assets/images/sendIcon.png';
import ducumentIcon from '../../../../assets/images/ducumentIcon.png';
import picIcon from '../../../../assets/images/picIcon.png';
import videoIcon from '../../../../assets/images/videoIcon.png';
import sendPlen from '../../../../assets/images/sendPlen.png';

const InputArea = ({setHeight}) => {
    const otherFeatures = [
        {
            img: picIcon,
            title: '照片'
        }, {
            img: ducumentIcon,
            title: '文件'
        }, {
            img: videoIcon,
            title: '影片'
        }
    ]

    const [commentText, setCommentText] = useState("");
    const [isShowOtherFeature, setShowOtherFeature] = useState(false);

    const showOtherFeature = () => {
        isShowOtherFeature ? setHeight(47) : setHeight(128)
        setShowOtherFeature(!isShowOtherFeature)
    }

    const sendMessage = () => {
        // console.log('commentText', commentText);
        // let newMessage = {
        //     type: 'local',
        //     message: commentText,
        //     time: 1632747960
        // }
        // let newChats = [...currentChats, newMessage]
        // console.log('newChats', newChats);
        // setCurrentChats(newChats)
        // setCommentText('')
        // const maxScrollTop = chatViewRef.current.scrollHeight - chatViewRef.current.clientHeight;
        // console.log('maxScrollTop',maxScrollTop);
        // chatViewRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    return (
        <div className={styles.root} style={{ backgroundColor: '#6E7591' }}>
            <div className={styles.inputWrap}>
                <div className={styles.addIconWrap}>
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
                        <div className={styles.futureIconWrap} key={item.title}>
                            <img src={item.img} alt="功能圖示" />
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default InputArea;