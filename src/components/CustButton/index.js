import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const CustButton = (props) => {
    const { border, width, height, color, borderRadius, backgroundColor, margin } = props
    const btnStyle = {
        border,
        width,
        height,
        color,
        borderRadius,
        backgroundColor,
        margin
    }
    return (
        <div className={styles.btnWrap}>
            <button className={styles.btn} style={btnStyle}>{props.text}</button>
        </div>
    )
}
CustButton.propTypes = {
    text: PropTypes.string,
    border: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    backgroundColor: PropTypes.string,
    margin: PropTypes.string
};
CustButton.defaultProps = {
    text: '輸入按鈕文字...',
    border: '0px',
    width: '300px',
    height: '45px',
    color: '#000',
    borderRadius: '30px',
    backgroundColor: '#fbd900',
    margin: 'auto'
};
export default CustButton;