import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { initNormalChat } from '../../../../fakeData/chatContent';
import ChatTextBox from '../../../../components/ChatTextBox';

const ViewChart = ({inputAreaHeight}) => {
    const [viewHeight, setViewHeight] = useState(inputAreaHeight);
    const [currentChats, setCurrentChats] = useState([]);

    useEffect(() => {
        setCurrentChats(currentChats.concat(initNormalChat))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        function getHeight() {
            return window.innerHeight - 64 - inputAreaHeight;
        }

        setViewHeight(getHeight());
    }, [inputAreaHeight])


    return (
        <div className={styles.root} style={{ backgroundColor: '#353F67', height: viewHeight }}>
            {
                currentChats.map((chatItem, index) => {
                    const { type, message, time } = chatItem
                    return (
                        <ChatTextBox key={index} chatType={type} message={message} time={time} />
                    )
                })
            }
        </div>
    )
}

export default ViewChart;