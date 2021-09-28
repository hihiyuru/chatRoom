import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link, useLocation, useHistory } from "react-router-dom";
import ALL_CHATROOM from '../../../fakeData/chatRoomName'

import textLogo from "../../../assets/images/textLogo.png"
import lockBear from "../../../assets/images/lockBear.png"
import gobackIcon from "../../../assets/images/goBackIcon.png"
import noSearchBear from "../../../assets/images/noSearchBear.png"

import CustButton from "../../../components/CustButton"


const PswSearchPerson = (props) => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const history = useHistory();

    const [isHasRoom, setIsHasRoom] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            let chatRoomName = query.get("chatRoomName")
            if (ALL_CHATROOM.includes(chatRoomName)) {
                history.push(`/Chat/passwordRoom?chatRoomName=${chatRoomName}`)
                return;
            }
            setIsHasRoom(false)
        }, 3000);
    }, [history, isHasRoom, query])



    return (
        <div className={styles.bg}>
            {
                isHasRoom ?
                    ''
                    :
                    <Link to="/Chatmode" className={styles.goBackIcon}>
                        <img src={gobackIcon} alt="回上一頁" />
                    </Link>
            }
            <img className={styles.textLogo} src={textLogo} alt="文字logo" />

            {
                isHasRoom ?
                    <>
                        <img src={lockBear} alt="啤酒" />
                        <div className={styles.textWrap}>
                            <p className={styles.searchText}>尋找聊客中...</p>
                            <Link to="/Chatmode" className={styles.spaceMargin}>
                                <CustButton text={'離開'} color={'#fbd900'} backgroundColor={'rgb(53, 63, 103)'} border={'1.5px solid #fbd900'} />
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <img src={noSearchBear} alt="啤酒" />
                        <div className={styles.textWrap}>
                            <p className={styles.noSearchText}>抱歉！</p>
                            <p className={styles.noSearchText}>目前沒有相關密語聊客</p>
                            <p className={styles.noSearchText}>請試著輸入其他密語</p>
                            <Link to="/Chatmode" className={styles.spaceMargin}>
                                <CustButton text={'離開'} color={'rgb(53, 63, 103)'}/>
                            </Link>
                        </div>
                    </>
            }

        </div>
    )
}
export default PswSearchPerson;