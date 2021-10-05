import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className={styles.root} style={{ backgroundColor: '#252B45' }}>
            <Link to='/Chatmode'>
                <p>離開</p>
            </Link>
            <h1>匿名聊客</h1>
        </div>
    )
}

export default Header;