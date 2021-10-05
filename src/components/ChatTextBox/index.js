import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

import { changeTime } from '../../utils/changeTime'

const ChatTextBox = (props) => {
    const { chatType, contentType, message, time } = props
    const fetchChatTime = changeTime(time)
    return (
        <>
            {
                chatType === 'local' ?
                    <>
                        {
                            contentType === 'text' ?
                                <div className={`${styles.textBox} ${styles.localBox}`}>
                                    <p className={`${styles.message} ${styles.localMessage}`}>{message}</p>
                                    <p className={`${styles.timeWrap} ${styles.localTimeWrap}`}>{fetchChatTime}</p>
                                </div> :
                                <div className={`${styles.textBox} ${styles.localBox}`}>
                                    <div className={styles.uploadImgWrap}>
                                        <img src={message} alt='傳送的圖片' />
                                    </div>
                                    <p className={`${styles.timeWrap} ${styles.localTimeWrap}`}>{fetchChatTime}</p>
                                </div>
                        }
                    </>
                    :
                    <div className={styles.textBox}>
                        <p className={`${styles.message} ${styles.remoteMessage}`}>{message}</p>
                        <p className={`${styles.timeWrap} ${styles.remoteTimeWrap}`}>{fetchChatTime}</p>
                    </div>
            }
        </>
    )
}
ChatTextBox.propTypes = {
    chatType: PropTypes.string,
    contentType: PropTypes.string,
    message: PropTypes.any,
    time: PropTypes.number
};
ChatTextBox.defaultProps = {
    chatType: 'local',
    contentType: 'text',
    message: '',
    time: 0
};
export default ChatTextBox;