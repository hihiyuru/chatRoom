import React from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import PicButton from './PicButton';
import CustButton from '../../components/CustButton'

import textLogo from '../../assets/images/textLogo.png';
import passwordButtonBg from '../../assets/images/passwordButtonBg.png';
import lobbyButtonBg from '../../assets/images/lobbyButtonBg.png';
import randomButtonBg from '../../assets/images/randomButtonBg.png';

const picButtons = [
    {
        title: '大廳',
        pic: lobbyButtonBg,
        chatroomType: 'normal'
    }, {
        title: '密語',
        pic: passwordButtonBg,
        chatroomType: 'password'
    }, {
        title: '天氣',
        pic: randomButtonBg,
        chatroomType: 'weather'
    }

]

const Chatmode = () => {

    const renderPicBtn = () => {
        return picButtons.map(item => <PicButton key={item.title} title={item.title} pic={item.pic} chatroomType={item.chatroomType}/>)
    }

    return (
        <div className={styles.bg}>
            <div className={styles.middleWrap}>
                <div className={`${styles.textLogoWrap} ${styles.spaceMargin}`}>
                    <img src={textLogo} alt='文字logo' />
                </div>

                {renderPicBtn()}

                <Link to="/" className={styles.spaceMargin}>
                    <CustButton text={'離開'} color={'#fbd900'} backgroundColor={'rgb(53, 63, 103)'} border={'1.5px solid #fbd900'} />
                </Link>

            </div>
        </div>
    )
}

export default Chatmode;