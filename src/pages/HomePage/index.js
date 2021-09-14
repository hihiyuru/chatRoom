import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import CustButton from '../../components/CustButton'

import logo from '../../assets/images/logo.png';



const HomePage = () => {
    const [isShowInput, setShowInput] = useState(false);
    const [nickName, setNickName] = useState('');
    const [isInputFocus, setIsInputFocus] = useState(false);
    // const [isMobile, setIsisMobile] = useState(false);

    const inputOnFocus = () => {
        setIsInputFocus(true)
    }
    const inputOnBlur = () => {
        setShowInput(false)
        setIsInputFocus(false)
    }

    // useEffect(() => {
    //     try { 
    //         document.createEvent("TouchEvent"); 
    //         setIsisMobile(true); 
    //         console.log('我是觸控', isMobile);
    //     } catch (e) { 
    //         setIsisMobile(false); 
    //         console.log('我不是觸控', isMobile);
    //     }
    // }, [isMobile]);

    return (
        <div className={styles.bg}>
            <div className={styles.picWrap}>
                <img src={logo} alt='logo' />
            </div>
            <div onClick={() => setShowInput(true)} className={isShowInput ? styles.topBtnWrap : ''}>
                {
                    isShowInput || isInputFocus ?
                        <input onFocus={inputOnFocus} onBlur={inputOnBlur} className={styles.nickNameInput} placeholder="請輸入中英文數字12個字元" value={nickName} onChange={(event) => setNickName(event.target.value)} /> :
                        <CustButton margin="0 0 20px 0" text={nickName ? nickName : '輸入暱稱'} color="rgb(53, 63, 103)" />
                }

            </div>
            <Link to="/Chatmode">
                <CustButton text={nickName ? '開始聊吧' : '匿名聊吧'} color={nickName ? 'rgb(53, 63, 103)' : '#fbd900'} backgroundColor={nickName ? '#fbd900' : 'rgb(53, 63, 103)'} border={nickName ? '0px' : '1.5px solid #fbd900'} />
            </Link>
        </div>
    )
}

export default HomePage;