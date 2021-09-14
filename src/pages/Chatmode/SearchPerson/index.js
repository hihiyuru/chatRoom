import React from 'react';
import styles from './styles.module.scss';
import { Link } from "react-router-dom";

import textLogo from "../../../assets/images/textLogo.png"
import logoWithoutText from "../../../assets/images/logoWithoutText.png"

import CustButton from "../../../components/CustButton"

const SearchPerson = () => {
    return (
        <div className={styles.bg}>
            <img className={styles.textLogo} src={textLogo} alt="文字logo"/>
            <img src={logoWithoutText} alt="文字logo"/>
            <div className={styles.textWrap}>
                <p className={styles.searchText}>尋找聊客中...</p>
                <Link to="/" className={styles.spaceMargin}>
                    <CustButton text={'離開'} color={'#fbd900'} backgroundColor={'rgb(53, 63, 103)'} border={'1.5px solid #fbd900'} />
                </Link>
            </div>
        </div>
    )
}
export default SearchPerson;