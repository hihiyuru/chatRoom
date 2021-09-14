import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import CustButton from '../../components/CustButton'

import goBackIcon from '../../assets/images/goBackIcon.png';
import textLogo from '../../assets/images/textLogo.png';
import psw from '../../assets/images/psw.png';


const Chatmode = () => {
    const [pswString, setPswString] = useState('');

    return (
        <div className={styles.bg}>
            <nav className={styles.navWrap}>
                <Link to="/" className={styles.goBackIcon}>
                    <img src={goBackIcon} alt="回上一頁" />
                </Link>
                <div className={styles.textLogo}>
                    <img src={textLogo} alt="文字logo" />
                </div>
            </nav>
            <div className={styles.pswPic}>
                <img src={psw} alt='psw' />
            </div>
            <div>
                <div className={styles.topBtnWrap}>
                    <input className={styles.pswInput} placeholder="請輸入密語如:台中、美食、劍與遠征" value={pswString} onChange={(event) => setPswString(event.target.value)} />
                </div>
                {
                    pswString ?
                        <Link to="/ChatPsw/PswSearchPerson">
                            <CustButton text="尋找聊客" color={pswString ? 'rgb(53, 63, 103)' : '#fbd900'} backgroundColor={pswString ? '#fbd900' : 'rgb(53, 63, 103)'} border={pswString ? '0px' : '1.5px solid #fbd900'} />
                        </Link> :
                        <CustButton text="尋找聊客" color={pswString ? 'rgb(53, 63, 103)' : '#fbd900'} backgroundColor={pswString ? '#fbd900' : 'rgb(53, 63, 103)'} border={pswString ? '0px' : '1.5px solid #fbd900'} />

                }
            </div>
        </div>
    )
}

export default Chatmode