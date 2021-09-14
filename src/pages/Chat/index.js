import React from 'react';
import styles from './styles.module.scss'

const Chat = (props) => {
    const { chatroomType } = props.match.params
    return (
        <>
            <p>聊天容器{chatroomType}</p>
        </>
    )
}

export default Chat;