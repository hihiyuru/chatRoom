import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

import { changeTime } from '../../utils/changeTime'

const ChatTextBox = (props) => {
    const { chatType, message, time } = props
    const fetchChatTime = changeTime(time)
    return (
        <>
            {
                chatType === 'local' ?
                    <div className={`${styles.textBox} ${styles.localBox}`}>
                        <p className={`${styles.message} ${styles.localMessage}`}>{message}</p>
                        <p className={`${styles.timeWrap} ${styles.localTimeWrap}`}>{fetchChatTime}</p>
                    </div> :
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
    message: PropTypes.string,
    time: PropTypes.number
};
ChatTextBox.defaultProps = {
    chatTyp: 'local',
    message: '',
    time: 0
};
export default ChatTextBox;